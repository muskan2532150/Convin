require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /index" do
      it "index response successful" do
        get '/users'
        expect(response).to be_successful
      end
  end
end
