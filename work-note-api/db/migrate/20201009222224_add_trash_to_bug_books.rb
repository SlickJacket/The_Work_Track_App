class AddTrashToBugBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :bug_books, :trash, :bool
  end
end
