class AddForeignKeyToBug < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :bugs, :cards
  end
end
