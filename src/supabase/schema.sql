/*****************************************************************************************
* 表名：purchase_records
* 功能：用于记录应用内购买行为（包括设备信息、商品信息、状态等）
* 作者：tang feng
* 环境：Supabase / PostgreSQL
* 时间：自动生成（由 ChatGPT）
******************************************************************************************/

-- ===============================
-- 1. 创建表结构
-- ===============================
CREATE TABLE IF NOT EXISTS purchase_records (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,  -- 主键ID，自动生成UUID
  device_id text NOT NULL,                        -- 设备唯一标识（例如 Expo SecureStore 生成）
  device_name varchar(255) NOT NULL,              -- 设备名称（如 iPhone 15 / Pixel 8）
  device_language varchar(50) NOT NULL,           -- 设备语言（如 zh-CN / en-US）
  region varchar(50) NOT NULL,                    -- 地区（如 CN / JP / US）
  platform varchar(50) NOT NULL,                  -- 平台（ios / android / web）
  product_id varchar(255) NOT NULL,               -- 商品ID（对应 IAP 商品标识）
  product_name varchar(255) NOT NULL,             -- 商品名称
  product_price numeric(10, 2) NOT NULL,          -- 商品价格（保留两位小数）
  currency text,                                  -- 货币单位（如 CNY、USD、JPY）
  status varchar(50) NOT NULL,                    -- 购买状态（pending / success / failed / refunded）
  user_id uuid references auth.users(id) on delete set null, -- 可选，关联用户表
  metadata jsonb,                                 -- 扩展信息（SDK 返回的订单号、收据等）
  created_at timestamptz NOT NULL DEFAULT timezone('utc', now()), -- 创建时间（UTC）
  updated_at timestamptz NOT NULL DEFAULT timezone('utc', now())  -- 更新时间（UTC）
);

COMMENT ON TABLE purchase_records IS '记录用户购买行为的主表';
COMMENT ON COLUMN purchase_records.device_id IS '设备唯一标识';
COMMENT ON COLUMN purchase_records.device_name IS '设备名称';
COMMENT ON COLUMN purchase_records.device_language IS '设备语言代码';
COMMENT ON COLUMN purchase_records.region IS '地区/国家代码';
COMMENT ON COLUMN purchase_records.platform IS '购买平台';
COMMENT ON COLUMN purchase_records.product_id IS '商品ID';
COMMENT ON COLUMN purchase_records.product_name IS '商品名称';
COMMENT ON COLUMN purchase_records.product_price IS '商品价格';
COMMENT ON COLUMN purchase_records.currency IS '货币单位';
COMMENT ON COLUMN purchase_records.status IS '购买状态';
COMMENT ON COLUMN purchase_records.user_id IS '用户ID（关联 auth.users）';
COMMENT ON COLUMN purchase_records.metadata IS '扩展信息（JSON 数据）';
COMMENT ON COLUMN purchase_records.created_at IS '记录创建时间';
COMMENT ON COLUMN purchase_records.updated_at IS '记录更新时间';


-- ===============================
-- 2. 创建索引（优化查询性能）
-- ===============================
CREATE INDEX IF NOT EXISTS idx_purchase_records_device_id ON purchase_records(device_id);
CREATE INDEX IF NOT EXISTS idx_purchase_records_created_at ON purchase_records(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_purchase_records_region ON purchase_records(region);
CREATE INDEX IF NOT EXISTS idx_purchase_records_platform ON purchase_records(platform);
CREATE INDEX IF NOT EXISTS idx_purchase_records_product_id ON purchase_records(product_id);
CREATE INDEX IF NOT EXISTS idx_purchase_records_status ON purchase_records(status);


-- ===============================
-- 3. 创建更新时间触发器（自动维护 updated_at）
-- ===============================
CREATE OR REPLACE FUNCTION purchase_records_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc', now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_purchase_records_updated_at
  BEFORE UPDATE ON purchase_records
  FOR EACH ROW
  EXECUTE FUNCTION purchase_records_update_timestamp();


-- ===============================
-- 4. 启用 RLS（行级安全）
-- ===============================
ALTER TABLE purchase_records ENABLE ROW LEVEL SECURITY;


-- ===============================
-- 5. 创建访问策略（RLS Policies）
-- ===============================

-- ✅ 所有人都能查看（如果无敏感信息，可保留）
CREATE POLICY "Public can view purchase records"
  ON purchase_records
  FOR SELECT
  USING (true);

-- ✅ 仅认证用户（登录用户）可插入
CREATE POLICY "Authenticated users can insert purchase records"
  ON purchase_records
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- ✅ 仅认证用户可更新
CREATE POLICY "Authenticated users can update purchase records"
  ON purchase_records
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- ✅ 仅认证用户可删除
CREATE POLICY "Authenticated users can delete purchase records"
  ON purchase_records
  FOR DELETE
  USING (auth.role() = 'authenticated');


-- ===============================
-- 6. 提示信息
-- ===============================
/*
✅ 创建完成后，你可以测试：
------------------------------------
insert into purchase_records (
  device_id, device_name, device_language, region, platform,
  product_id, product_name, product_price, currency, status
) values (
  'ABC123456', 'iPhone 15', 'zh-CN', 'CN', 'ios',
  'premium_monthly', '月度会员', 18.00, 'CNY', 'success'
);

select * from purchase_records order by created_at desc;
------------------------------------
*/

-- 🚀 表结构与策略创建完成
