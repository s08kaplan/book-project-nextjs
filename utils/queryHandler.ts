import { Model } from "mongoose"


export interface QueryParams {
    search?: string
    sort?: string
    order?: "asc" | "desc"
    page?: number
    limit?: number
    filter?: Record<string, any>
}

interface BuildQueryResult<T> {
    data: T[]
    total: number
    page: number
    limit: number
}

export async function queryHandler<T> (url: string, model: Model<T>,
    searchFields: string[],
    customFilters: string[] = []) :Promise<BuildQueryResult<T>>  {
    const searchParams = new URL(url).searchParams

    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "createdAt";
    const order = (searchParams.get("order") as "asc" | "desc") || "asc";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
  
    const filter: Record<string, any> = {};
    for (const key of customFilters) {
      const value = searchParams.get(key);
      if (value) filter[key] = value;
    }

    if (search) {
        filter["$or"] = searchFields.map((field) => ({
          [field]: { $regex: search, $options: "i" },
        }));
      }
    
      
      const total = await model.countDocuments(filter);
      const data = await model
        .find(filter)
        .sort({ [sort]: order === "asc" ? 1 : -1 })
        .skip((page - 1) * limit)
        .limit(limit);
    
      return { data, total, page, limit };
}

// import { Model } from "mongoose";

// export interface QueryParams {
//   search?: string;
//   sort?: string;
//   order?: "asc" | "desc";
//   page?: number;
//   limit?: number;
//   filter?: Record<string, any>;
// }

// interface BuildQueryResult<T> {
//   data: T[];
//   total: number;
//   page: number;
//   limit: number;
// }

// export async function queryHandler<T>(
//   url: string,
//   model: Model<T>,
//   searchFields: string[],
//   customFilters: string[] = [],
//   populate?: string | string[] 
// ): Promise<BuildQueryResult<T>> {
//   const searchParams = new URL(url).searchParams;

//   const search = searchParams.get("search") || "";
//   const sort = searchParams.get("sort") || "createdAt";
//   const order = (searchParams.get("order") as "asc" | "desc") || "asc";
//   const page = parseInt(searchParams.get("page") || "1", 10);
//   const limit = parseInt(searchParams.get("limit") || "10", 10);

//   const filter: Record<string, any> = {};
//   for (const key of customFilters) {
//     const value = searchParams.get(key);
//     if (value) filter[key] = value;
//   }

//   if (search) {
//     filter["$or"] = searchFields.map((field) => ({
//       [field]: { $regex: search, $options: "i" },
//     }));
//   }

//   const total = await model.countDocuments(filter);

//   // Build query
//   let query = model
//     .find(filter)
//     .sort({ [sort]: order === "asc" ? 1 : -1 })
//     .skip((page - 1) * limit)
//     .limit(limit);


//   if (populate) {
//     if (Array.isArray(populate)) {
//       populate.forEach((field) => {
//         query = query.populate(field);
//       });
//     } else {
//       query = query.populate(populate);
//     }
//   }

//   const data = await query;

//   return { data, total, page, limit };
// }
