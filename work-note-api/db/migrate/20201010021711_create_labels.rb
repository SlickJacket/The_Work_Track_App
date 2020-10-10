class CreateLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :labels do |t|
      t.string :title
      t.string :color
      t.integer :labelable_id
      t.string :labelable_type
      t.integer :user_id

      t.timestamps
    end
  end
end
