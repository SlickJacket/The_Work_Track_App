class AddStarredToBugs < ActiveRecord::Migration[6.0]
  def change
    add_column :bugs, :starred, :bool
  end
end
