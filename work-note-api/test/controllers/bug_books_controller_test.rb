require 'test_helper'

class BugBooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bug_book = bug_books(:one)
  end

  test "should get index" do
    get bug_books_url, as: :json
    assert_response :success
  end

  test "should create bug_book" do
    assert_difference('BugBook.count') do
      post bug_books_url, params: { bug_book: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show bug_book" do
    get bug_book_url(@bug_book), as: :json
    assert_response :success
  end

  test "should update bug_book" do
    patch bug_book_url(@bug_book), params: { bug_book: {  } }, as: :json
    assert_response 200
  end

  test "should destroy bug_book" do
    assert_difference('BugBook.count', -1) do
      delete bug_book_url(@bug_book), as: :json
    end

    assert_response 204
  end
end
