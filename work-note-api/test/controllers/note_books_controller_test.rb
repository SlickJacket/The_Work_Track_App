require 'test_helper'

class NoteBooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @note_book = note_books(:one)
  end

  test "should get index" do
    get note_books_url, as: :json
    assert_response :success
  end

  test "should create note_book" do
    assert_difference('NoteBook.count') do
      post note_books_url, params: { note_book: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show note_book" do
    get note_book_url(@note_book), as: :json
    assert_response :success
  end

  test "should update note_book" do
    patch note_book_url(@note_book), params: { note_book: {  } }, as: :json
    assert_response 200
  end

  test "should destroy note_book" do
    assert_difference('NoteBook.count', -1) do
      delete note_book_url(@note_book), as: :json
    end

    assert_response 204
  end
end
