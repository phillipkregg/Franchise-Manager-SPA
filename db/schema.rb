# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120530192600) do

  create_table "features", :force => true do |t|
    t.string   "feature_name"
    t.integer  "franchise_set_id"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

  create_table "franchise_sets", :force => true do |t|
    t.string   "set_name"
    t.string   "set_num"
    t.string   "soa_num"
    t.string   "address"
    t.string   "time_zone"
    t.string   "country"
    t.string   "temperature"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "franchises", :force => true do |t|
    t.string   "franchise_name"
    t.string   "franchise_num"
    t.integer  "franchise_set_id"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "user_name"
    t.string   "franchise_set"
    t.string   "user_domain"
    t.integer  "franchise_set_id"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

end
