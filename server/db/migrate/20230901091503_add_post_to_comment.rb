class AddPostToComment < ActiveRecord::Migration[7.0]
  def change
    add_reference :comments, :post,foreign_key: true, type: :uuid
  end
end
