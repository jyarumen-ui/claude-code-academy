-- scheduled_posts テーブルの追加カラム
-- Supabase SQL Editor で実行してください（service_role 権限が必要）。
-- 未実行でもアプリは動作しますが、カテゴリ/メディアはローカル保持のみになります。

-- Threadsのカテゴリ（トピック/コミュニティ）
ALTER TABLE scheduled_posts ADD COLUMN IF NOT EXISTS threads_category text;

-- 添付メディアのTypefully media_id 配列
ALTER TABLE scheduled_posts ADD COLUMN IF NOT EXISTS media_ids jsonb;

-- 下書きステータスを許容（status に CHECK 制約がある場合のみ調整）
-- 例: status は 'draft' | 'scheduled' | 'posted' | 'error' を取り得ます。
-- 既存のCHECK制約があれば下記のように貼り直してください：
-- ALTER TABLE scheduled_posts DROP CONSTRAINT IF EXISTS scheduled_posts_status_check;
-- ALTER TABLE scheduled_posts ADD CONSTRAINT scheduled_posts_status_check
--   CHECK (status IN ('draft','scheduled','posted','error'));
