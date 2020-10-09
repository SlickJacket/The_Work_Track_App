class AddStarredToProjectFolders < ActiveRecord::Migration[6.0]
  def change
    add_column :project_folders, :starred, :bool
  end
end
