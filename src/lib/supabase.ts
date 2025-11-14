import { createClient } from "@supabase/supabase-js";

// Get configuration from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Missing Supabase environment variables. Please check your .env.local file.");
}

// Create Supabase client (for frontend use)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Create server-side client if needed for server-side usage
export const createServerClient = () => {
    return createClient(supabaseUrl, supabaseAnonKey);
};

// Purchase record type definition (based on schema.sql)
export interface PurchaseRecord {
    id: string;
    device_id: string;
    device_name: string;
    device_language: string;
    region: string;
    platform: "ios" | "android" | "web";
    product_id: string;
    product_name: string;
    product_price: number;
    currency: string;
    status: "pending" | "success" | "failed" | "refunded";
    user_id?: string;
    metadata?: any;
    created_at: string;
    updated_at: string;
}

// Query purchase records
export async function getPurchaseRecords(params?: { limit?: number; offset?: number; status?: string; platform?: string; region?: string }) {
    try {
        let query = supabase.from("purchase_records").select("*").order("created_at", { ascending: false });

        if (params?.status) {
            query = query.eq("status", params.status);
        }
        if (params?.platform) {
            query = query.eq("platform", params.platform);
        }
        if (params?.region) {
            query = query.eq("region", params.region);
        }
        if (params?.limit) {
            query = query.limit(params.limit);
        }
        if (params?.offset) {
            query = query.range(params.offset, params.offset + (params.limit || 10) - 1);
        }

        const { data, error } = await query;

        if (error) {
            console.error("Error fetching purchase records:", error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error("Exception fetching purchase records:", error);
        return { data: null, error };
    }
}

// Get purchase record statistics
export async function getPurchaseStats() {
    try {
        const { data, error } = await supabase.from("purchase_records").select("status, platform, region");

        if (error) {
            console.error("Error fetching purchase stats:", error);
            return { data: null, error };
        }

        const stats = {
            total: data?.length || 0,
            success: data?.filter((r) => r.status === "success").length || 0,
            pending: data?.filter((r) => r.status === "pending").length || 0,
            failed: data?.filter((r) => r.status === "failed").length || 0,
            refunded: data?.filter((r) => r.status === "refunded").length || 0,
            ios: data?.filter((r) => r.platform === "ios").length || 0,
            android: data?.filter((r) => r.platform === "android").length || 0,
            web: data?.filter((r) => r.platform === "web").length || 0,
        };

        return { data: stats, error: null };
    } catch (error) {
        console.error("Exception fetching purchase stats:", error);
        return { data: null, error };
    }
}

// Insert purchase record
export async function insertPurchaseRecord(record: Omit<PurchaseRecord, "id" | "created_at" | "updated_at">) {
    try {
        const { data, error } = await supabase.from("purchase_records").insert([record]).select().single();

        if (error) {
            console.error("Error inserting purchase record:", error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error("Exception inserting purchase record:", error);
        return { data: null, error };
    }
}

// Update purchase record status
export async function updatePurchaseRecordStatus(id: string, status: PurchaseRecord["status"]) {
    try {
        const { data, error } = await supabase.from("purchase_records").update({ status }).eq("id", id).select().single();

        if (error) {
            console.error("Error updating purchase record:", error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error("Exception updating purchase record:", error);
        return { data: null, error };
    }
}
