class UserSerializer <  ActiveModel::Serializer
  attributes :id, :firstName, :middleName, :lastName, :score

  has_many :jokes

  def firstName
    object.first_name
  end

  def middleName
    object.middle_name
  end

  def lastName
    object.last_name
  end
end