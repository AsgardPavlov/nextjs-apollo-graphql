import { gql } from "@apollo/client"

export const CREATE_ADMIN = gql`
	mutation(
		$data: AdminCreateInput!
	){
		createAdmin(
			data: $data
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
export const RESET_PASSWORD = gql`
	mutation(
		$where: AdminWhereUniqueInput!
	){
		resetPassword(
			where: $where
		)
	}
`
export const SIGN_IN_ADMIN = gql`
	mutation(
		$data: AdminSignInInput!
	){
		signInAdmin(
			data: $data
		){
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
					_count
				}
				roleId
			}
			token
		}
	}
`
export const CHANGE_PASSWORD_ADMIN = gql`
	mutation(
		$data: ChangePasswordInput!
	){
		changePasswordAdmin(
			data: $data
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
export const SINGLE_UPLOAD = gql`
	mutation(
		$upload: Upload!
	){
		singleUpload(
			upload: $upload
		)
	}
`
export const MULTI_UPLOAD = gql`
	mutation(
		$upload: [Upload]!
	){
		multiUpload(
			upload: $upload
		)
	}
`
export const DELETE_FILE = gql`
	mutation(
		$fileName: String!
	){
		deleteFile(
			fileName: $fileName
		)
	}
`
export const CREATE_ONE_USER = gql`
	mutation(
		$data: UserCreateInput!
	){
		createOneUser(
			data: $data
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
export const UPDATE_ONE_USER = gql`
	mutation(
		$data: UserUpdateInput!
		$where: UserWhereUniqueInput!
	){
		updateOneUser(
			data: $data
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
export const DELETE_ONE_USER = gql`
	mutation(
		$where: UserWhereUniqueInput!
	){
		deleteOneUser(
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
export const UPSERT_ONE_USER = gql`
	mutation(
		$where: UserWhereUniqueInput!
		$create: UserCreateInput!
		$update: UserUpdateInput!
	){
		upsertOneUser(
			where: $where
			create: $create
			update: $update
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
export const DELETE_MANY_USER = gql`
	mutation(
		$where: UserWhereInput
	){
		deleteManyUser(
			where: $where
		){
			count
		}
	}
`
export const UPDATE_MANY_USER = gql`
	mutation(
		$data: UserUpdateManyMutationInput!
		$where: UserWhereInput
	){
		updateManyUser(
			data: $data
			where: $where
		){
			count
		}
	}
`
export const CREATE_ONE_OBJECT = gql`
	mutation(
		$data: ObjectCreateInput!
	){
		createOneObject(
			data: $data
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
export const UPDATE_ONE_OBJECT = gql`
	mutation(
		$data: ObjectUpdateInput!
		$where: ObjectWhereUniqueInput!
	){
		updateOneObject(
			data: $data
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
export const DELETE_ONE_OBJECT = gql`
	mutation(
		$where: ObjectWhereUniqueInput!
	){
		deleteOneObject(
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
export const UPSERT_ONE_OBJECT = gql`
	mutation(
		$where: ObjectWhereUniqueInput!
		$create: ObjectCreateInput!
		$update: ObjectUpdateInput!
	){
		upsertOneObject(
			where: $where
			create: $create
			update: $update
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
export const DELETE_MANY_OBJECT = gql`
	mutation(
		$where: ObjectWhereInput
	){
		deleteManyObject(
			where: $where
		){
			count
		}
	}
`
export const UPDATE_MANY_OBJECT = gql`
	mutation(
		$data: ObjectUpdateManyMutationInput!
		$where: ObjectWhereInput
	){
		updateManyObject(
			data: $data
			where: $where
		){
			count
		}
	}
`
export const CREATE_ONE_BLOG = gql`
	mutation(
		$data: BlogCreateInput!
	){
		createOneBlog(
			data: $data
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
export const UPDATE_ONE_BLOG = gql`
	mutation(
		$data: BlogUpdateInput!
		$where: BlogWhereUniqueInput!
	){
		updateOneBlog(
			data: $data
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
export const DELETE_ONE_BLOG = gql`
	mutation(
		$where: BlogWhereUniqueInput!
	){
		deleteOneBlog(
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
export const UPSERT_ONE_BLOG = gql`
	mutation(
		$where: BlogWhereUniqueInput!
		$create: BlogCreateInput!
		$update: BlogUpdateInput!
	){
		upsertOneBlog(
			where: $where
			create: $create
			update: $update
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
export const DELETE_MANY_BLOG = gql`
	mutation(
		$where: BlogWhereInput
	){
		deleteManyBlog(
			where: $where
		){
			count
		}
	}
`
export const UPDATE_MANY_BLOG = gql`
	mutation(
		$data: BlogUpdateManyMutationInput!
		$where: BlogWhereInput
	){
		updateManyBlog(
			data: $data
			where: $where
		){
			count
		}
	}
`
export const CREATE_ONE_REVIEW = gql`
	mutation(
		$data: ReviewCreateInput!
	){
		createOneReview(
			data: $data
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
export const UPDATE_ONE_REVIEW = gql`
	mutation(
		$data: ReviewUpdateInput!
		$where: ReviewWhereUniqueInput!
	){
		updateOneReview(
			data: $data
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
export const DELETE_ONE_REVIEW = gql`
	mutation(
		$where: ReviewWhereUniqueInput!
	){
		deleteOneReview(
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
export const UPSERT_ONE_REVIEW = gql`
	mutation(
		$where: ReviewWhereUniqueInput!
		$create: ReviewCreateInput!
		$update: ReviewUpdateInput!
	){
		upsertOneReview(
			where: $where
			create: $create
			update: $update
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
export const DELETE_MANY_REVIEW = gql`
	mutation(
		$where: ReviewWhereInput
	){
		deleteManyReview(
			where: $where
		){
			count
		}
	}
`
export const UPDATE_MANY_REVIEW = gql`
	mutation(
		$data: ReviewUpdateManyMutationInput!
		$where: ReviewWhereInput
	){
		updateManyReview(
			data: $data
			where: $where
		){
			count
		}
	}
`
export const CREATE_ONE_APPLICATION = gql`
	mutation(
		$data: ApplicationCreateInput!
	){
		createOneApplication(
			data: $data
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
export const UPDATE_ONE_APPLICATION = gql`
	mutation(
		$data: ApplicationUpdateInput!
		$where: ApplicationWhereUniqueInput!
	){
		updateOneApplication(
			data: $data
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
export const DELETE_ONE_APPLICATION = gql`
	mutation(
		$where: ApplicationWhereUniqueInput!
	){
		deleteOneApplication(
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
export const UPSERT_ONE_APPLICATION = gql`
	mutation(
		$where: ApplicationWhereUniqueInput!
		$create: ApplicationCreateInput!
		$update: ApplicationUpdateInput!
	){
		upsertOneApplication(
			where: $where
			create: $create
			update: $update
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
export const DELETE_MANY_APPLICATION = gql`
	mutation(
		$where: ApplicationWhereInput
	){
		deleteManyApplication(
			where: $where
		){
			count
		}
	}
`
export const UPDATE_MANY_APPLICATION = gql`
	mutation(
		$data: ApplicationUpdateManyMutationInput!
		$where: ApplicationWhereInput
	){
		updateManyApplication(
			data: $data
			where: $where
		){
			count
		}
	}
`
export const CREATE_ONE_ADMIN = gql`
	mutation(
		$data: AdminCreateInput!
	){
		createOneAdmin(
			data: $data
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
export const UPDATE_ONE_ADMIN = gql`
	mutation(
		$data: AdminUpdateInput!
		$where: AdminWhereUniqueInput!
	){
		updateOneAdmin(
			data: $data
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
export const DELETE_ONE_ADMIN = gql`
	mutation(
		$where: AdminWhereUniqueInput!
	){
		deleteOneAdmin(
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
export const UPSERT_ONE_ADMIN = gql`
	mutation(
		$where: AdminWhereUniqueInput!
		$create: AdminCreateInput!
		$update: AdminUpdateInput!
	){
		upsertOneAdmin(
			where: $where
			create: $create
			update: $update
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
export const DELETE_MANY_ADMIN = gql`
	mutation(
		$where: AdminWhereInput
	){
		deleteManyAdmin(
			where: $where
		){
			count
		}
	}
`
export const UPDATE_MANY_ADMIN = gql`
	mutation(
		$data: AdminUpdateManyMutationInput!
		$where: AdminWhereInput
	){
		updateManyAdmin(
			data: $data
			where: $where
		){
			count
		}
	}
`
export const CREATE_ONE_ADMIN_ROLE = gql`
	mutation(
		$data: AdminRoleCreateInput!
	){
		createOneAdminRole(
			data: $data
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
export const UPDATE_ONE_ADMIN_ROLE = gql`
	mutation(
		$data: AdminRoleUpdateInput!
		$where: AdminRoleWhereUniqueInput!
	){
		updateOneAdminRole(
			data: $data
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
export const DELETE_ONE_ADMIN_ROLE = gql`
	mutation(
		$where: AdminRoleWhereUniqueInput!
	){
		deleteOneAdminRole(
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
export const UPSERT_ONE_ADMIN_ROLE = gql`
	mutation(
		$where: AdminRoleWhereUniqueInput!
		$create: AdminRoleCreateInput!
		$update: AdminRoleUpdateInput!
	){
		upsertOneAdminRole(
			where: $where
			create: $create
			update: $update
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
export const DELETE_MANY_ADMIN_ROLE = gql`
	mutation(
		$where: AdminRoleWhereInput
	){
		deleteManyAdminRole(
			where: $where
		){
			count
		}
	}
`
export const UPDATE_MANY_ADMIN_ROLE = gql`
	mutation(
		$data: AdminRoleUpdateManyMutationInput!
		$where: AdminRoleWhereInput
	){
		updateManyAdminRole(
			data: $data
			where: $where
		){
			count
		}
	}
`