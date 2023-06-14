require 'rails_helper'

RSpec.describe "Skills", type: :request do
  describe "GET /index" do
    it "index response successful" do
      get '/skills'
      expect(response).to be_successful
    end
  end
end
