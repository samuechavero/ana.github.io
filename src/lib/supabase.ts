import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bfrdwuclaamfcrsdyvhf.supabase.co'
const supabaseKey = 'sb_publishable_odEXKYTDuOX-TMxwf7fqJg_xSs1oE0Y'

export const supabase = createClient(supabaseUrl, supabaseKey)
