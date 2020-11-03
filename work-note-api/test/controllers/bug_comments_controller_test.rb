require 'test_helper'

class BugCommentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bug_comment = bug_comments(:one)
  end

  test "should get index" do
    get bug_comments_url, as: :json
    assert_response :success
  end

  test "should create bug_comment" do
    assert_difference('BugComment.count') do
      post bug_comments_url, params: { bug_comment: { bug_id: @bug_comment.bug_id, description: @bug_comment.description } }, as: :json
    end

    assert_response 201
  end

  test "should show bug_comment" do
    get bug_comment_url(@bug_comment), as: :json
    assert_response :success
  end

  test "should update bug_comment" do
    patch bug_comment_url(@bug_comment), params: { bug_comment: { bug_id: @bug_comment.bug_id, description: @bug_comment.description } }, as: :json
    assert_response 200
  end

  test "should destroy bug_comment" do
    assert_difference('BugComment.count', -1) do
      delete bug_comment_url(@bug_comment), as: :json
    end

    assert_response 204
  end
end
