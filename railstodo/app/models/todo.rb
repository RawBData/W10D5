class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [ true , false ] }
end


# Todo.create(title: "Fuck shit up",body: "a bat",done: false)