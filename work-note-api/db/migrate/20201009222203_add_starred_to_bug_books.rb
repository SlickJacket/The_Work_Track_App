class AddStarredToBugBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :bug_books, :starred, :bool
  end
end
