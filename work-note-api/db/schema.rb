# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_10_021711) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bug_books", force: :cascade do |t|
    t.string "title"
    t.bigint "project_folder_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "starred"
    t.boolean "trash"
    t.index ["project_folder_id"], name: "index_bug_books_on_project_folder_id"
  end

  create_table "bugs", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "priority"
    t.string "bug_status"
    t.bigint "bug_book_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "starred"
    t.boolean "trash"
    t.index ["bug_book_id"], name: "index_bugs_on_bug_book_id"
  end

  create_table "labels", force: :cascade do |t|
    t.string "title"
    t.string "color"
    t.integer "labelable_id"
    t.string "labelable_type"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "note_books", force: :cascade do |t|
    t.string "title"
    t.bigint "project_folder_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "starred"
    t.boolean "trash"
    t.index ["project_folder_id"], name: "index_note_books_on_project_folder_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.bigint "note_book_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "starred"
    t.boolean "trash"
    t.index ["note_book_id"], name: "index_notes_on_note_book_id"
  end

  create_table "project_folders", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "starred"
    t.boolean "trash"
    t.index ["user_id"], name: "index_project_folders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.integer "phone_number"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bug_books", "project_folders"
  add_foreign_key "bugs", "bug_books"
  add_foreign_key "note_books", "project_folders"
  add_foreign_key "notes", "note_books"
  add_foreign_key "project_folders", "users"
end
