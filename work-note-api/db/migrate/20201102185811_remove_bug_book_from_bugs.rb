class RemoveBugBookFromBugs < ActiveRecord::Migration[6.0]
  def change
    remove_reference :bugs, :bug_book, null: false, foreign_key: true
  end
end
