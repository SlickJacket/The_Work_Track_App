class AddTrashToProjectFolders < ActiveRecord::Migration[6.0]
  def change
    add_column :project_folders, :trash, :bool
  end
end
