class AddCardToBugs < ActiveRecord::Migration[6.0]
  def change
    add_reference :bugs, :card
  end
end
