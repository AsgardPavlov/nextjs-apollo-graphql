import { gql } from "@apollo/client"

export const FIND_ME_ADMIN = gql`
	{
		findMeAdmin{
			id
			createdAt
			updatedAt
			block
			delete
			isConfirmed
			type
			email
			name
			password
			repassword
			role{
				id
				createdAt
				updatedAt
				title
				description
				canObject
				canBlog
				canReview
				canChangeRole
				_count{
					admin
				}
			}
			roleId
		}
	}
`
export const FIND_UNIQUE_USER = gql`
	query(
		$where: UserWhereUniqueInput!
	){
		findUniqueUser(
			where: $where
		){
			id
			createdAt
			updatedAt
			isConfirmed
			name
			phone
		}
	}
`
export const FIND_FIRST_USER = gql`
	query(
		$where: UserWhereInput
		$orderBy: [UserOrderByWithRelationInput]
		$cursor: UserWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [UserScalarFieldEnum]
	){
		findFirstUser(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isConfirmed
			name
			phone
		}
	}
`
export const FIND_MANY_USER = gql`
	query(
		$where: UserWhereInput
		$orderBy: [UserOrderByWithRelationInput]
		$cursor: UserWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [UserScalarFieldEnum]
	){
		findManyUser(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isConfirmed
			name
			phone
		}
	}
`
export const FIND_MANY_USER_COUNT = gql`
	query(
		$where: UserWhereInput
		$orderBy: [UserOrderByWithRelationInput]
		$cursor: UserWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [UserScalarFieldEnum]
	){
		findManyUserCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		)
	}
`
export const AGGREGATE_USER = gql`
	query(
		$where: UserWhereInput
		$orderBy: [UserOrderByWithRelationInput]
		$cursor: UserWhereUniqueInput
		$take: Int
		$skip: Int
	){
		aggregateUser(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
		){
			_count{
				id
				createdAt
				updatedAt
				isConfirmed
				name
				phone
				_all
			}
			_min{
				id
				createdAt
				updatedAt
				isConfirmed
				name
				phone
			}
			_max{
				id
				createdAt
				updatedAt
				isConfirmed
				name
				phone
			}
		}
	}
`
export const FIND_UNIQUE_OBJECT = gql`
	query(
		$where: ObjectWhereUniqueInput!
	){
		findUniqueObject(
			where: $where
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			type
			description
			images
			about
			aboutImg
			developer
			address
			space
			rooms
			bedrooms
			bathrooms
			costRUB
			costUSD
			costAED
			city
		}
	}
`
export const FIND_FIRST_OBJECT = gql`
	query(
		$where: ObjectWhereInput
		$orderBy: [ObjectOrderByWithRelationInput]
		$cursor: ObjectWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ObjectScalarFieldEnum]
	){
		findFirstObject(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			type
			description
			images
			about
			aboutImg
			developer
			address
			space
			rooms
			bedrooms
			bathrooms
			costRUB
			costUSD
			costAED
			city
		}
	}
`
export const FIND_MANY_OBJECT = gql`
	query(
		$where: ObjectWhereInput
		$orderBy: [ObjectOrderByWithRelationInput]
		$cursor: ObjectWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ObjectScalarFieldEnum]
	){
		findManyObject(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			type
			description
			images
			about
			aboutImg
			developer
			address
			space
			rooms
			bedrooms
			bathrooms
			costRUB
			costUSD
			costAED
			city
		}
	}
`
export const FIND_MANY_OBJECT_COUNT = gql`
	query(
		$where: ObjectWhereInput
		$orderBy: [ObjectOrderByWithRelationInput]
		$cursor: ObjectWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ObjectScalarFieldEnum]
	){
		findManyObjectCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		)
	}
`
export const AGGREGATE_OBJECT = gql`
	query(
		$where: ObjectWhereInput
		$orderBy: [ObjectOrderByWithRelationInput]
		$cursor: ObjectWhereUniqueInput
		$take: Int
		$skip: Int
	){
		aggregateObject(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
		){
			_count{
				id
				createdAt
				updatedAt
				isVisible
				title
				type
				description
				images
				about
				aboutImg
				developer
				address
				space
				rooms
				bedrooms
				bathrooms
				costRUB
				costUSD
				costAED
				city
				_all
			}
			_avg{
				space
				rooms
				bedrooms
				bathrooms
				costRUB
				costUSD
				costAED
			}
			_sum{
				space
				rooms
				bedrooms
				bathrooms
				costRUB
				costUSD
				costAED
			}
			_min{
				id
				createdAt
				updatedAt
				isVisible
				title
				type
				description
				about
				aboutImg
				developer
				address
				space
				rooms
				bedrooms
				bathrooms
				costRUB
				costUSD
				costAED
				city
			}
			_max{
				id
				createdAt
				updatedAt
				isVisible
				title
				type
				description
				about
				aboutImg
				developer
				address
				space
				rooms
				bedrooms
				bathrooms
				costRUB
				costUSD
				costAED
				city
			}
		}
	}
`
export const FIND_UNIQUE_BLOG = gql`
	query(
		$where: BlogWhereUniqueInput!
	){
		findUniqueBlog(
			where: $where
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			topic
			img
			description
			images
		}
	}
`
export const FIND_FIRST_BLOG = gql`
	query(
		$where: BlogWhereInput
		$orderBy: [BlogOrderByWithRelationInput]
		$cursor: BlogWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [BlogScalarFieldEnum]
	){
		findFirstBlog(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			topic
			img
			description
			images
		}
	}
`
export const FIND_MANY_BLOG = gql`
	query(
		$where: BlogWhereInput
		$orderBy: [BlogOrderByWithRelationInput]
		$cursor: BlogWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [BlogScalarFieldEnum]
	){
		findManyBlog(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			topic
			img
			description
			images
		}
	}
`
export const FIND_MANY_BLOG_COUNT = gql`
	query(
		$where: BlogWhereInput
		$orderBy: [BlogOrderByWithRelationInput]
		$cursor: BlogWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [BlogScalarFieldEnum]
	){
		findManyBlogCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		)
	}
`
export const AGGREGATE_BLOG = gql`
	query(
		$where: BlogWhereInput
		$orderBy: [BlogOrderByWithRelationInput]
		$cursor: BlogWhereUniqueInput
		$take: Int
		$skip: Int
	){
		aggregateBlog(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
		){
			_count{
				id
				createdAt
				updatedAt
				isVisible
				title
				topic
				img
				description
				images
				_all
			}
			_min{
				id
				createdAt
				updatedAt
				isVisible
				title
				topic
				img
				description
			}
			_max{
				id
				createdAt
				updatedAt
				isVisible
				title
				topic
				img
				description
			}
		}
	}
`
export const FIND_UNIQUE_REVIEW = gql`
	query(
		$where: ReviewWhereUniqueInput!
	){
		findUniqueReview(
			where: $where
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			description
			rating
		}
	}
`
export const FIND_FIRST_REVIEW = gql`
	query(
		$where: ReviewWhereInput
		$orderBy: [ReviewOrderByWithRelationInput]
		$cursor: ReviewWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ReviewScalarFieldEnum]
	){
		findFirstReview(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			description
			rating
		}
	}
`
export const FIND_MANY_REVIEW = gql`
	query(
		$where: ReviewWhereInput
		$orderBy: [ReviewOrderByWithRelationInput]
		$cursor: ReviewWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ReviewScalarFieldEnum]
	){
		findManyReview(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			title
			description
			rating
		}
	}
`
export const FIND_MANY_REVIEW_COUNT = gql`
	query(
		$where: ReviewWhereInput
		$orderBy: [ReviewOrderByWithRelationInput]
		$cursor: ReviewWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ReviewScalarFieldEnum]
	){
		findManyReviewCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		)
	}
`
export const AGGREGATE_REVIEW = gql`
	query(
		$where: ReviewWhereInput
		$orderBy: [ReviewOrderByWithRelationInput]
		$cursor: ReviewWhereUniqueInput
		$take: Int
		$skip: Int
	){
		aggregateReview(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
		){
			_count{
				id
				createdAt
				updatedAt
				isVisible
				title
				description
				rating
				_all
			}
			_avg{
				rating
			}
			_sum{
				rating
			}
			_min{
				id
				createdAt
				updatedAt
				isVisible
				title
				description
				rating
			}
			_max{
				id
				createdAt
				updatedAt
				isVisible
				title
				description
				rating
			}
		}
	}
`
export const FIND_UNIQUE_APPLICATION = gql`
	query(
		$where: ApplicationWhereUniqueInput!
	){
		findUniqueApplication(
			where: $where
		){
			id
			createdAt
			updatedAt
			isVisible
			name
			number
			email
			callTime
			objectOfInterest
			commuticationType
		}
	}
`
export const FIND_FIRST_APPLICATION = gql`
	query(
		$where: ApplicationWhereInput
		$orderBy: [ApplicationOrderByWithRelationInput]
		$cursor: ApplicationWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ApplicationScalarFieldEnum]
	){
		findFirstApplication(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			name
			number
			email
			callTime
			objectOfInterest
			commuticationType
		}
	}
`
export const FIND_MANY_APPLICATION = gql`
	query(
		$where: ApplicationWhereInput
		$orderBy: [ApplicationOrderByWithRelationInput]
		$cursor: ApplicationWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ApplicationScalarFieldEnum]
	){
		findManyApplication(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			isVisible
			name
			number
			email
			callTime
			objectOfInterest
			commuticationType
		}
	}
`
export const FIND_MANY_APPLICATION_COUNT = gql`
	query(
		$where: ApplicationWhereInput
		$orderBy: [ApplicationOrderByWithRelationInput]
		$cursor: ApplicationWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [ApplicationScalarFieldEnum]
	){
		findManyApplicationCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		)
	}
`
export const AGGREGATE_APPLICATION = gql`
	query(
		$where: ApplicationWhereInput
		$orderBy: [ApplicationOrderByWithRelationInput]
		$cursor: ApplicationWhereUniqueInput
		$take: Int
		$skip: Int
	){
		aggregateApplication(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
		){
			_count{
				id
				createdAt
				updatedAt
				isVisible
				name
				number
				email
				callTime
				objectOfInterest
				commuticationType
				_all
			}
			_min{
				id
				createdAt
				updatedAt
				isVisible
				name
				number
				email
				callTime
				objectOfInterest
				commuticationType
			}
			_max{
				id
				createdAt
				updatedAt
				isVisible
				name
				number
				email
				callTime
				objectOfInterest
				commuticationType
			}
		}
	}
`
export const FIND_UNIQUE_ADMIN = gql`
	query(
		$where: AdminWhereUniqueInput!
	){
		findUniqueAdmin(
			where: $where
		){
			id
			createdAt
			updatedAt
			block
			delete
			isConfirmed
			type
			email
			name
			password
			repassword
			role{
				id
				createdAt
				updatedAt
				title
				description
				canObject
				canBlog
				canReview
				canChangeRole
				_count{
					admin
				}
			}
			roleId
		}
	}
`
export const FIND_FIRST_ADMIN = gql`
	query(
		$where: AdminWhereInput
		$orderBy: [AdminOrderByWithRelationInput]
		$cursor: AdminWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [AdminScalarFieldEnum]
	){
		findFirstAdmin(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			block
			delete
			isConfirmed
			type
			email
			name
			password
			repassword
			role{
				id
				createdAt
				updatedAt
				title
				description
				canObject
				canBlog
				canReview
				canChangeRole
				_count{
					admin
				}
			}
			roleId
		}
	}
`
export const FIND_MANY_ADMIN = gql`
	query(
		$where: AdminWhereInput
		$orderBy: [AdminOrderByWithRelationInput]
		$cursor: AdminWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [AdminScalarFieldEnum]
	){
		findManyAdmin(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			block
			delete
			isConfirmed
			type
			email
			name
			password
			repassword
			role{
				id
				createdAt
				updatedAt
				title
				description
				canObject
				canBlog
				canReview
				canChangeRole
				_count{
					admin
				}
			}
			roleId
		}
	}
`
export const FIND_MANY_ADMIN_COUNT = gql`
	query(
		$where: AdminWhereInput
		$orderBy: [AdminOrderByWithRelationInput]
		$cursor: AdminWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [AdminScalarFieldEnum]
	){
		findManyAdminCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		)
	}
`
export const AGGREGATE_ADMIN = gql`
	query(
		$where: AdminWhereInput
		$orderBy: [AdminOrderByWithRelationInput]
		$cursor: AdminWhereUniqueInput
		$take: Int
		$skip: Int
	){
		aggregateAdmin(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
		){
			_count{
				id
				createdAt
				updatedAt
				block
				delete
				isConfirmed
				type
				email
				name
				password
				repassword
				roleId
				_all
			}
			_min{
				id
				createdAt
				updatedAt
				block
				delete
				isConfirmed
				type
				email
				name
				password
				repassword
				roleId
			}
			_max{
				id
				createdAt
				updatedAt
				block
				delete
				isConfirmed
				type
				email
				name
				password
				repassword
				roleId
			}
		}
	}
`
export const FIND_UNIQUE_ADMIN_ROLE = gql`
	query(
		$where: AdminRoleWhereUniqueInput!
	){
		findUniqueAdminRole(
			where: $where
		){
			id
			createdAt
			updatedAt
			title
			description
			canObject
			canBlog
			canReview
			canChangeRole
			admin{
				id
				createdAt
				updatedAt
				block
				delete
				isConfirmed
				type
				email
				name
				password
				repassword
				roleId
			}
			_count{
				admin
			}
		}
	}
`
export const FIND_FIRST_ADMIN_ROLE = gql`
	query(
		$where: AdminRoleWhereInput
		$orderBy: [AdminRoleOrderByWithRelationInput]
		$cursor: AdminRoleWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [AdminRoleScalarFieldEnum]
	){
		findFirstAdminRole(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			title
			description
			canObject
			canBlog
			canReview
			canChangeRole
			admin{
				id
				createdAt
				updatedAt
				block
				delete
				isConfirmed
				type
				email
				name
				password
				repassword
				roleId
			}
			_count{
				admin
			}
		}
	}
`
export const FIND_MANY_ADMIN_ROLE = gql`
	query(
		$where: AdminRoleWhereInput
		$orderBy: [AdminRoleOrderByWithRelationInput]
		$cursor: AdminRoleWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [AdminRoleScalarFieldEnum]
	){
		findManyAdminRole(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		){
			id
			createdAt
			updatedAt
			title
			description
			canObject
			canBlog
			canReview
			canChangeRole
			admin{
				id
				createdAt
				updatedAt
				block
				delete
				isConfirmed
				type
				email
				name
				password
				repassword
				roleId
			}
			_count{
				admin
			}
		}
	}
`
export const FIND_MANY_ADMIN_ROLE_COUNT = gql`
	query(
		$where: AdminRoleWhereInput
		$orderBy: [AdminRoleOrderByWithRelationInput]
		$cursor: AdminRoleWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [AdminRoleScalarFieldEnum]
	){
		findManyAdminRoleCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		)
	}
`
export const AGGREGATE_ADMIN_ROLE = gql`
	query(
		$where: AdminRoleWhereInput
		$orderBy: [AdminRoleOrderByWithRelationInput]
		$cursor: AdminRoleWhereUniqueInput
		$take: Int
		$skip: Int
	){
		aggregateAdminRole(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
		){
			_count{
				id
				createdAt
				updatedAt
				title
				description
				canObject
				canBlog
				canReview
				canChangeRole
				_all
			}
			_min{
				id
				createdAt
				updatedAt
				title
				description
				canObject
				canBlog
				canReview
				canChangeRole
			}
			_max{
				id
				createdAt
				updatedAt
				title
				description
				canObject
				canBlog
				canReview
				canChangeRole
			}
		}
	}
`