class ChangePhoneNumberToBeStringInUsers < ActiveRecord::Migration[6.0]
  def up
    change_column :users, :phone_number, :string
  end

  def down
    change_column :users, :phone_number, :string
  end
end
