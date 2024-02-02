/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Json: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  block: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  delete: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isConfirmed: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  repassword?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AdminRole>;
  roleId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AdminAuthorizationPayload = {
  __typename?: 'AdminAuthorizationPayload';
  admin: Admin;
  token: Scalars['String']['output'];
};

export type AdminCountAggregateOutputType = {
  __typename?: 'AdminCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  block: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  delete: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isConfirmed: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  repassword: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AdminCountOrderByAggregateInput = {
  block?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  repassword?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminCreateInput = {
  block?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  repassword?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<AdminRoleCreateNestedOneWithoutAdminInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminCreateManyInput = {
  block?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  repassword?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminCreateManyRoleInput = {
  block?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  repassword?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminCreateManyRoleInputEnvelope = {
  data: Array<AdminCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AdminCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<AdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdminCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<AdminCreateWithoutRoleInput>>;
  createMany?: InputMaybe<AdminCreateManyRoleInputEnvelope>;
};

export type AdminCreateOrConnectWithoutRoleInput = {
  create: AdminUncheckedCreateWithoutRoleInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateWithoutRoleInput = {
  block?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  repassword?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminListRelationFilter = {
  every?: InputMaybe<AdminWhereInput>;
  none?: InputMaybe<AdminWhereInput>;
  some?: InputMaybe<AdminWhereInput>;
};

export type AdminMaxAggregateOutputType = {
  __typename?: 'AdminMaxAggregateOutputType';
  block?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  delete?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  repassword?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminMaxOrderByAggregateInput = {
  block?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  repassword?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminMinAggregateOutputType = {
  __typename?: 'AdminMinAggregateOutputType';
  block?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  delete?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  repassword?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminMinOrderByAggregateInput = {
  block?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  repassword?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdminOrderByWithAggregationInput = {
  _count?: InputMaybe<AdminCountOrderByAggregateInput>;
  _max?: InputMaybe<AdminMaxOrderByAggregateInput>;
  _min?: InputMaybe<AdminMinOrderByAggregateInput>;
  block?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  repassword?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminOrderByWithRelationInput = {
  block?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  repassword?: InputMaybe<SortOrder>;
  role?: InputMaybe<AdminRoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminRole = {
  __typename?: 'AdminRole';
  _count: AdminRoleCountOutputType;
  admin: Array<Admin>;
  canBlog: Scalars['Boolean']['output'];
  canChangeRole: Scalars['Boolean']['output'];
  canObject: Scalars['Boolean']['output'];
  canReview: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type AdminRoleAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<AdminScalarFieldEnum>;
  orderBy?: InputMaybe<AdminOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};

export type AdminRoleCountAggregateOutputType = {
  __typename?: 'AdminRoleCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  canBlog: Scalars['Int']['output'];
  canChangeRole: Scalars['Int']['output'];
  canObject: Scalars['Int']['output'];
  canReview: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AdminRoleCountOrderByAggregateInput = {
  canBlog?: InputMaybe<SortOrder>;
  canChangeRole?: InputMaybe<SortOrder>;
  canObject?: InputMaybe<SortOrder>;
  canReview?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminRoleCountOutputType = {
  __typename?: 'AdminRoleCountOutputType';
  admin: Scalars['Int']['output'];
};

export type AdminRoleCreateInput = {
  admin?: InputMaybe<AdminCreateNestedManyWithoutRoleInput>;
  canBlog?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRole?: InputMaybe<Scalars['Boolean']['input']>;
  canObject?: InputMaybe<Scalars['Boolean']['input']>;
  canReview?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminRoleCreateManyInput = {
  canBlog?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRole?: InputMaybe<Scalars['Boolean']['input']>;
  canObject?: InputMaybe<Scalars['Boolean']['input']>;
  canReview?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminRoleCreateNestedOneWithoutAdminInput = {
  connect?: InputMaybe<AdminRoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminRoleCreateOrConnectWithoutAdminInput>;
  create?: InputMaybe<AdminRoleUncheckedCreateWithoutAdminInput>;
};

export type AdminRoleCreateOrConnectWithoutAdminInput = {
  create: AdminRoleUncheckedCreateWithoutAdminInput;
  where: AdminRoleWhereUniqueInput;
};

export type AdminRoleCreateWithoutAdminInput = {
  canBlog?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRole?: InputMaybe<Scalars['Boolean']['input']>;
  canObject?: InputMaybe<Scalars['Boolean']['input']>;
  canReview?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminRoleMaxAggregateOutputType = {
  __typename?: 'AdminRoleMaxAggregateOutputType';
  canBlog?: Maybe<Scalars['Boolean']['output']>;
  canChangeRole?: Maybe<Scalars['Boolean']['output']>;
  canObject?: Maybe<Scalars['Boolean']['output']>;
  canReview?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminRoleMaxOrderByAggregateInput = {
  canBlog?: InputMaybe<SortOrder>;
  canChangeRole?: InputMaybe<SortOrder>;
  canObject?: InputMaybe<SortOrder>;
  canReview?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminRoleMinAggregateOutputType = {
  __typename?: 'AdminRoleMinAggregateOutputType';
  canBlog?: Maybe<Scalars['Boolean']['output']>;
  canChangeRole?: Maybe<Scalars['Boolean']['output']>;
  canObject?: Maybe<Scalars['Boolean']['output']>;
  canReview?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminRoleMinOrderByAggregateInput = {
  canBlog?: InputMaybe<SortOrder>;
  canChangeRole?: InputMaybe<SortOrder>;
  canObject?: InputMaybe<SortOrder>;
  canReview?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminRoleOrderByWithAggregationInput = {
  _count?: InputMaybe<AdminRoleCountOrderByAggregateInput>;
  _max?: InputMaybe<AdminRoleMaxOrderByAggregateInput>;
  _min?: InputMaybe<AdminRoleMinOrderByAggregateInput>;
  canBlog?: InputMaybe<SortOrder>;
  canChangeRole?: InputMaybe<SortOrder>;
  canObject?: InputMaybe<SortOrder>;
  canReview?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminRoleOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByRelationAggregateInput>;
  canBlog?: InputMaybe<SortOrder>;
  canChangeRole?: InputMaybe<SortOrder>;
  canObject?: InputMaybe<SortOrder>;
  canReview?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminRoleRelationFilter = {
  is?: InputMaybe<AdminRoleWhereInput>;
  isNot?: InputMaybe<AdminRoleWhereInput>;
};

export enum AdminRoleScalarFieldEnum {
  CanBlog = 'canBlog',
  CanChangeRole = 'canChangeRole',
  CanObject = 'canObject',
  CanReview = 'canReview',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AdminRoleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AdminRoleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AdminRoleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AdminRoleScalarWhereWithAggregatesInput>>;
  canBlog?: InputMaybe<BoolWithAggregatesFilter>;
  canChangeRole?: InputMaybe<BoolWithAggregatesFilter>;
  canObject?: InputMaybe<BoolWithAggregatesFilter>;
  canReview?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AdminRoleUncheckedCreateInput = {
  admin?: InputMaybe<AdminUncheckedCreateNestedManyWithoutRoleInput>;
  canBlog?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRole?: InputMaybe<Scalars['Boolean']['input']>;
  canObject?: InputMaybe<Scalars['Boolean']['input']>;
  canReview?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminRoleUncheckedCreateWithoutAdminInput = {
  canBlog?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRole?: InputMaybe<Scalars['Boolean']['input']>;
  canObject?: InputMaybe<Scalars['Boolean']['input']>;
  canReview?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminRoleUncheckedUpdateInput = {
  admin?: InputMaybe<AdminUncheckedUpdateManyWithoutRoleInput>;
  canBlog?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canChangeRole?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canObject?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canReview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminRoleUncheckedUpdateManyInput = {
  canBlog?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canChangeRole?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canObject?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canReview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminRoleUncheckedUpdateWithoutAdminInput = {
  canBlog?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canChangeRole?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canObject?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canReview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminRoleUpdateInput = {
  admin?: InputMaybe<AdminUpdateManyWithoutRoleInput>;
  canBlog?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canChangeRole?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canObject?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canReview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminRoleUpdateManyMutationInput = {
  canBlog?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canChangeRole?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canObject?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canReview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminRoleUpdateOneWithoutAdminInput = {
  connect?: InputMaybe<AdminRoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminRoleCreateOrConnectWithoutAdminInput>;
  create?: InputMaybe<AdminRoleUncheckedCreateWithoutAdminInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<AdminRoleUncheckedUpdateWithoutAdminInput>;
  upsert?: InputMaybe<AdminRoleUpsertWithoutAdminInput>;
};

export type AdminRoleUpdateWithoutAdminInput = {
  canBlog?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canChangeRole?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canObject?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canReview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminRoleUpsertWithoutAdminInput = {
  create: AdminRoleUncheckedCreateWithoutAdminInput;
  update: AdminRoleUncheckedUpdateWithoutAdminInput;
};

export type AdminRoleWhereInput = {
  AND?: InputMaybe<Array<AdminRoleWhereInput>>;
  NOT?: InputMaybe<Array<AdminRoleWhereInput>>;
  OR?: InputMaybe<Array<AdminRoleWhereInput>>;
  admin?: InputMaybe<AdminListRelationFilter>;
  canBlog?: InputMaybe<BoolFilter>;
  canChangeRole?: InputMaybe<BoolFilter>;
  canObject?: InputMaybe<BoolFilter>;
  canReview?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminRoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum AdminScalarFieldEnum {
  Block = 'block',
  CreatedAt = 'createdAt',
  Delete = 'delete',
  Email = 'email',
  Id = 'id',
  IsConfirmed = 'isConfirmed',
  Name = 'name',
  Password = 'password',
  Repassword = 'repassword',
  RoleId = 'roleId',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AdminScalarWhereInput = {
  AND?: InputMaybe<Array<AdminScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdminScalarWhereInput>>;
  OR?: InputMaybe<Array<AdminScalarWhereInput>>;
  block?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  delete?: InputMaybe<BoolFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isConfirmed?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  repassword?: InputMaybe<StringNullableFilter>;
  roleId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  block?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  delete?: InputMaybe<BoolWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isConfirmed?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  repassword?: InputMaybe<StringNullableWithAggregatesFilter>;
  roleId?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AdminSignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminUncheckedCreateInput = {
  block?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  repassword?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminUncheckedCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<AdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdminCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<AdminCreateWithoutRoleInput>>;
  createMany?: InputMaybe<AdminCreateManyRoleInputEnvelope>;
};

export type AdminUncheckedCreateWithoutRoleInput = {
  block?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  repassword?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminUncheckedUpdateInput = {
  block?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  repassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUncheckedUpdateManyInput = {
  block?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  repassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUncheckedUpdateManyWithoutAdminInput = {
  block?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  repassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUncheckedUpdateManyWithoutRoleInput = {
  connect?: InputMaybe<Array<AdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdminCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<AdminCreateWithoutRoleInput>>;
  createMany?: InputMaybe<AdminCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<AdminWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdminScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdminWhereUniqueInput>>;
  set?: InputMaybe<Array<AdminWhereUniqueInput>>;
  update?: InputMaybe<Array<AdminUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<AdminUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<AdminUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type AdminUncheckedUpdateWithoutRoleInput = {
  block?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  repassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUpdateInput = {
  block?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  repassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<AdminRoleUpdateOneWithoutAdminInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUpdateManyMutationInput = {
  block?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  repassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUpdateManyWithWhereWithoutRoleInput = {
  data: AdminUncheckedUpdateManyWithoutAdminInput;
  where: AdminScalarWhereInput;
};

export type AdminUpdateManyWithoutRoleInput = {
  connect?: InputMaybe<Array<AdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdminCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<AdminCreateWithoutRoleInput>>;
  createMany?: InputMaybe<AdminCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<AdminWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdminScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdminWhereUniqueInput>>;
  set?: InputMaybe<Array<AdminWhereUniqueInput>>;
  update?: InputMaybe<Array<AdminUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<AdminUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<AdminUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type AdminUpdateWithWhereUniqueWithoutRoleInput = {
  data: AdminUncheckedUpdateWithoutRoleInput;
  where: AdminWhereUniqueInput;
};

export type AdminUpdateWithoutRoleInput = {
  block?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  repassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUpsertWithWhereUniqueWithoutRoleInput = {
  create: AdminUncheckedCreateWithoutRoleInput;
  update: AdminUncheckedUpdateWithoutRoleInput;
  where: AdminWhereUniqueInput;
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  block?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  delete?: InputMaybe<BoolFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isConfirmed?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  repassword?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<AdminRoleWhereInput>;
  roleId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AggregateAdmin = {
  __typename?: 'AggregateAdmin';
  _count?: Maybe<AdminCountAggregateOutputType>;
  _max?: Maybe<AdminMaxAggregateOutputType>;
  _min?: Maybe<AdminMinAggregateOutputType>;
};

export type AggregateAdminRole = {
  __typename?: 'AggregateAdminRole';
  _count?: Maybe<AdminRoleCountAggregateOutputType>;
  _max?: Maybe<AdminRoleMaxAggregateOutputType>;
  _min?: Maybe<AdminRoleMinAggregateOutputType>;
};

export type AggregateApplication = {
  __typename?: 'AggregateApplication';
  _count?: Maybe<ApplicationCountAggregateOutputType>;
  _max?: Maybe<ApplicationMaxAggregateOutputType>;
  _min?: Maybe<ApplicationMinAggregateOutputType>;
};

export type AggregateBlog = {
  __typename?: 'AggregateBlog';
  _count?: Maybe<BlogCountAggregateOutputType>;
  _max?: Maybe<BlogMaxAggregateOutputType>;
  _min?: Maybe<BlogMinAggregateOutputType>;
};

export type AggregateObject = {
  __typename?: 'AggregateObject';
  _avg?: Maybe<ObjectAvgAggregateOutputType>;
  _count?: Maybe<ObjectCountAggregateOutputType>;
  _max?: Maybe<ObjectMaxAggregateOutputType>;
  _min?: Maybe<ObjectMinAggregateOutputType>;
  _sum?: Maybe<ObjectSumAggregateOutputType>;
};

export type AggregateReview = {
  __typename?: 'AggregateReview';
  _avg?: Maybe<ReviewAvgAggregateOutputType>;
  _count?: Maybe<ReviewCountAggregateOutputType>;
  _max?: Maybe<ReviewMaxAggregateOutputType>;
  _min?: Maybe<ReviewMinAggregateOutputType>;
  _sum?: Maybe<ReviewSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
};

export type Application = {
  __typename?: 'Application';
  callTime?: Maybe<Scalars['String']['output']>;
  commuticationType: CommuticationType;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isVisible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
  objectOfInterest?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ApplicationCountAggregateOutputType = {
  __typename?: 'ApplicationCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  callTime: Scalars['Int']['output'];
  commuticationType: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isVisible: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  number: Scalars['Int']['output'];
  objectOfInterest: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ApplicationCountOrderByAggregateInput = {
  callTime?: InputMaybe<SortOrder>;
  commuticationType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  objectOfInterest?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ApplicationCreateInput = {
  callTime?: InputMaybe<Scalars['String']['input']>;
  commuticationType?: InputMaybe<CommuticationType>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['String']['input'];
  objectOfInterest?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ApplicationCreateManyInput = {
  callTime?: InputMaybe<Scalars['String']['input']>;
  commuticationType?: InputMaybe<CommuticationType>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['String']['input'];
  objectOfInterest?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ApplicationMaxAggregateOutputType = {
  __typename?: 'ApplicationMaxAggregateOutputType';
  callTime?: Maybe<Scalars['String']['output']>;
  commuticationType?: Maybe<CommuticationType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  objectOfInterest?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApplicationMaxOrderByAggregateInput = {
  callTime?: InputMaybe<SortOrder>;
  commuticationType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  objectOfInterest?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ApplicationMinAggregateOutputType = {
  __typename?: 'ApplicationMinAggregateOutputType';
  callTime?: Maybe<Scalars['String']['output']>;
  commuticationType?: Maybe<CommuticationType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  objectOfInterest?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApplicationMinOrderByAggregateInput = {
  callTime?: InputMaybe<SortOrder>;
  commuticationType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  objectOfInterest?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ApplicationOrderByWithAggregationInput = {
  _count?: InputMaybe<ApplicationCountOrderByAggregateInput>;
  _max?: InputMaybe<ApplicationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ApplicationMinOrderByAggregateInput>;
  callTime?: InputMaybe<SortOrder>;
  commuticationType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  objectOfInterest?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ApplicationOrderByWithRelationInput = {
  callTime?: InputMaybe<SortOrder>;
  commuticationType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  objectOfInterest?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ApplicationScalarFieldEnum {
  CallTime = 'callTime',
  CommuticationType = 'commuticationType',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  IsVisible = 'isVisible',
  Name = 'name',
  Number = 'number',
  ObjectOfInterest = 'objectOfInterest',
  UpdatedAt = 'updatedAt'
}

export type ApplicationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  callTime?: InputMaybe<StringNullableWithAggregatesFilter>;
  commuticationType?: InputMaybe<EnumCommuticationTypeWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isVisible?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  number?: InputMaybe<StringWithAggregatesFilter>;
  objectOfInterest?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ApplicationUncheckedCreateInput = {
  callTime?: InputMaybe<Scalars['String']['input']>;
  commuticationType?: InputMaybe<CommuticationType>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['String']['input'];
  objectOfInterest?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ApplicationUncheckedUpdateInput = {
  callTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  commuticationType?: InputMaybe<EnumCommuticationTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  objectOfInterest?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ApplicationUncheckedUpdateManyInput = {
  callTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  commuticationType?: InputMaybe<EnumCommuticationTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  objectOfInterest?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ApplicationUpdateInput = {
  callTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  commuticationType?: InputMaybe<EnumCommuticationTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  objectOfInterest?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ApplicationUpdateManyMutationInput = {
  callTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  commuticationType?: InputMaybe<EnumCommuticationTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  objectOfInterest?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ApplicationWhereInput = {
  AND?: InputMaybe<Array<ApplicationWhereInput>>;
  NOT?: InputMaybe<Array<ApplicationWhereInput>>;
  OR?: InputMaybe<Array<ApplicationWhereInput>>;
  callTime?: InputMaybe<StringNullableFilter>;
  commuticationType?: InputMaybe<EnumCommuticationTypeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isVisible?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  objectOfInterest?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ApplicationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type Blog = {
  __typename?: 'Blog';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  img: Scalars['String']['output'];
  isVisible: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  topic?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type BlogCountAggregateOutputType = {
  __typename?: 'BlogCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  img: Scalars['Int']['output'];
  isVisible: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  topic: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type BlogCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  img: Scalars['String']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  img: Scalars['String']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogCreateimagesInput = {
  set: Array<Scalars['String']['input']>;
};

export type BlogMaxAggregateOutputType = {
  __typename?: 'BlogMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogMinAggregateOutputType = {
  __typename?: 'BlogMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogOrderByWithAggregationInput = {
  _count?: InputMaybe<BlogCountOrderByAggregateInput>;
  _max?: InputMaybe<BlogMaxOrderByAggregateInput>;
  _min?: InputMaybe<BlogMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum BlogScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Images = 'images',
  Img = 'img',
  IsVisible = 'isVisible',
  Title = 'title',
  Topic = 'topic',
  UpdatedAt = 'updatedAt'
}

export type BlogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  img?: InputMaybe<StringWithAggregatesFilter>;
  isVisible?: InputMaybe<BoolWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  topic?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type BlogUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  img: Scalars['String']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateimagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BlogWhereInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  img?: InputMaybe<StringFilter>;
  isVisible?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  topic?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ChangePasswordInput = {
  confirmPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum CityEnum {
  Dubai = 'DUBAI',
  Moscow = 'MOSCOW'
}

export enum CommuticationType {
  Call = 'CALL',
  Email = 'EMAIL',
  Tg = 'TG',
  Wa = 'WA'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumCityEnumNullableFilter = {
  equals?: InputMaybe<CityEnum>;
  in?: InputMaybe<Array<CityEnum>>;
  not?: InputMaybe<NestedEnumCityEnumNullableFilter>;
  notIn?: InputMaybe<Array<CityEnum>>;
};

export type EnumCityEnumNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumCityEnumNullableFilter>;
  _min?: InputMaybe<NestedEnumCityEnumNullableFilter>;
  equals?: InputMaybe<CityEnum>;
  in?: InputMaybe<Array<CityEnum>>;
  not?: InputMaybe<NestedEnumCityEnumNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CityEnum>>;
};

export type EnumCommuticationTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<CommuticationType>;
};

export type EnumCommuticationTypeFilter = {
  equals?: InputMaybe<CommuticationType>;
  in?: InputMaybe<Array<CommuticationType>>;
  not?: InputMaybe<NestedEnumCommuticationTypeFilter>;
  notIn?: InputMaybe<Array<CommuticationType>>;
};

export type EnumCommuticationTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCommuticationTypeFilter>;
  _min?: InputMaybe<NestedEnumCommuticationTypeFilter>;
  equals?: InputMaybe<CommuticationType>;
  in?: InputMaybe<Array<CommuticationType>>;
  not?: InputMaybe<NestedEnumCommuticationTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CommuticationType>>;
};

export type EnumTypeEnumNullableFilter = {
  equals?: InputMaybe<TypeEnum>;
  in?: InputMaybe<Array<TypeEnum>>;
  not?: InputMaybe<NestedEnumTypeEnumNullableFilter>;
  notIn?: InputMaybe<Array<TypeEnum>>;
};

export type EnumTypeEnumNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumTypeEnumNullableFilter>;
  _min?: InputMaybe<NestedEnumTypeEnumNullableFilter>;
  equals?: InputMaybe<TypeEnum>;
  in?: InputMaybe<Array<TypeEnum>>;
  not?: InputMaybe<NestedEnumTypeEnumNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TypeEnum>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePasswordAdmin: Admin;
  createAdmin: Admin;
  createOneAdmin: Admin;
  createOneAdminRole: AdminRole;
  createOneApplication: Application;
  createOneBlog: Blog;
  createOneObject: Object;
  createOneReview: Review;
  createOneUser: User;
  deleteFile: Scalars['String']['output'];
  deleteManyAdmin?: Maybe<BatchPayload>;
  deleteManyAdminRole?: Maybe<BatchPayload>;
  deleteManyApplication?: Maybe<BatchPayload>;
  deleteManyBlog?: Maybe<BatchPayload>;
  deleteManyObject?: Maybe<BatchPayload>;
  deleteManyReview?: Maybe<BatchPayload>;
  deleteManyUser?: Maybe<BatchPayload>;
  deleteOneAdmin?: Maybe<Admin>;
  deleteOneAdminRole?: Maybe<AdminRole>;
  deleteOneApplication?: Maybe<Application>;
  deleteOneBlog?: Maybe<Blog>;
  deleteOneObject?: Maybe<Object>;
  deleteOneReview?: Maybe<Review>;
  deleteOneUser?: Maybe<User>;
  multiUpload?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  signInAdmin: AdminAuthorizationPayload;
  singleUpload?: Maybe<Scalars['String']['output']>;
  updateManyAdmin?: Maybe<BatchPayload>;
  updateManyAdminRole?: Maybe<BatchPayload>;
  updateManyApplication?: Maybe<BatchPayload>;
  updateManyBlog?: Maybe<BatchPayload>;
  updateManyObject?: Maybe<BatchPayload>;
  updateManyReview?: Maybe<BatchPayload>;
  updateManyUser?: Maybe<BatchPayload>;
  updateOneAdmin: Admin;
  updateOneAdminRole: AdminRole;
  updateOneApplication: Application;
  updateOneBlog: Blog;
  updateOneObject: Object;
  updateOneReview: Review;
  updateOneUser: User;
  upsertOneAdmin?: Maybe<Admin>;
  upsertOneAdminRole?: Maybe<AdminRole>;
  upsertOneApplication?: Maybe<Application>;
  upsertOneBlog?: Maybe<Blog>;
  upsertOneObject?: Maybe<Object>;
  upsertOneReview?: Maybe<Review>;
  upsertOneUser?: Maybe<User>;
};


export type MutationChangePasswordAdminArgs = {
  data: ChangePasswordInput;
};


export type MutationCreateAdminArgs = {
  data: AdminCreateInput;
};


export type MutationCreateOneAdminArgs = {
  data: AdminCreateInput;
};


export type MutationCreateOneAdminRoleArgs = {
  data: AdminRoleCreateInput;
};


export type MutationCreateOneApplicationArgs = {
  data: ApplicationCreateInput;
};


export type MutationCreateOneBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateOneObjectArgs = {
  data: ObjectCreateInput;
};


export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteFileArgs = {
  fileName: Scalars['String']['input'];
};


export type MutationDeleteManyAdminArgs = {
  where?: InputMaybe<AdminWhereInput>;
};


export type MutationDeleteManyAdminRoleArgs = {
  where?: InputMaybe<AdminRoleWhereInput>;
};


export type MutationDeleteManyApplicationArgs = {
  where?: InputMaybe<ApplicationWhereInput>;
};


export type MutationDeleteManyBlogArgs = {
  where?: InputMaybe<BlogWhereInput>;
};


export type MutationDeleteManyObjectArgs = {
  where?: InputMaybe<ObjectWhereInput>;
};


export type MutationDeleteManyReviewArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationDeleteOneAdminRoleArgs = {
  where: AdminRoleWhereUniqueInput;
};


export type MutationDeleteOneApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type MutationDeleteOneBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationDeleteOneObjectArgs = {
  where: ObjectWhereUniqueInput;
};


export type MutationDeleteOneReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationMultiUploadArgs = {
  upload: Array<InputMaybe<Scalars['Upload']['input']>>;
};


export type MutationResetPasswordArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationSignInAdminArgs = {
  data: AdminSignInInput;
};


export type MutationSingleUploadArgs = {
  upload: Scalars['Upload']['input'];
};


export type MutationUpdateManyAdminArgs = {
  data: AdminUpdateManyMutationInput;
  where?: InputMaybe<AdminWhereInput>;
};


export type MutationUpdateManyAdminRoleArgs = {
  data: AdminRoleUpdateManyMutationInput;
  where?: InputMaybe<AdminRoleWhereInput>;
};


export type MutationUpdateManyApplicationArgs = {
  data: ApplicationUpdateManyMutationInput;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type MutationUpdateManyBlogArgs = {
  data: BlogUpdateManyMutationInput;
  where?: InputMaybe<BlogWhereInput>;
};


export type MutationUpdateManyObjectArgs = {
  data: ObjectUpdateManyMutationInput;
  where?: InputMaybe<ObjectWhereInput>;
};


export type MutationUpdateManyReviewArgs = {
  data: ReviewUpdateManyMutationInput;
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneAdminArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpdateOneAdminRoleArgs = {
  data: AdminRoleUpdateInput;
  where: AdminRoleWhereUniqueInput;
};


export type MutationUpdateOneApplicationArgs = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};


export type MutationUpdateOneBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpdateOneObjectArgs = {
  data: ObjectUpdateInput;
  where: ObjectWhereUniqueInput;
};


export type MutationUpdateOneReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneAdminArgs = {
  create: AdminCreateInput;
  update: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpsertOneAdminRoleArgs = {
  create: AdminRoleCreateInput;
  update: AdminRoleUpdateInput;
  where: AdminRoleWhereUniqueInput;
};


export type MutationUpsertOneApplicationArgs = {
  create: ApplicationCreateInput;
  update: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};


export type MutationUpsertOneBlogArgs = {
  create: BlogCreateInput;
  update: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpsertOneObjectArgs = {
  create: ObjectCreateInput;
  update: ObjectUpdateInput;
  where: ObjectWhereUniqueInput;
};


export type MutationUpsertOneReviewArgs = {
  create: ReviewCreateInput;
  update: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumCityEnumNullableFilter = {
  equals?: InputMaybe<CityEnum>;
  in?: InputMaybe<Array<CityEnum>>;
  not?: InputMaybe<NestedEnumCityEnumNullableFilter>;
  notIn?: InputMaybe<Array<CityEnum>>;
};

export type NestedEnumCityEnumNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumCityEnumNullableFilter>;
  _min?: InputMaybe<NestedEnumCityEnumNullableFilter>;
  equals?: InputMaybe<CityEnum>;
  in?: InputMaybe<Array<CityEnum>>;
  not?: InputMaybe<NestedEnumCityEnumNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CityEnum>>;
};

export type NestedEnumCommuticationTypeFilter = {
  equals?: InputMaybe<CommuticationType>;
  in?: InputMaybe<Array<CommuticationType>>;
  not?: InputMaybe<NestedEnumCommuticationTypeFilter>;
  notIn?: InputMaybe<Array<CommuticationType>>;
};

export type NestedEnumCommuticationTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCommuticationTypeFilter>;
  _min?: InputMaybe<NestedEnumCommuticationTypeFilter>;
  equals?: InputMaybe<CommuticationType>;
  in?: InputMaybe<Array<CommuticationType>>;
  not?: InputMaybe<NestedEnumCommuticationTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CommuticationType>>;
};

export type NestedEnumTypeEnumNullableFilter = {
  equals?: InputMaybe<TypeEnum>;
  in?: InputMaybe<Array<TypeEnum>>;
  not?: InputMaybe<NestedEnumTypeEnumNullableFilter>;
  notIn?: InputMaybe<Array<TypeEnum>>;
};

export type NestedEnumTypeEnumNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumTypeEnumNullableFilter>;
  _min?: InputMaybe<NestedEnumTypeEnumNullableFilter>;
  equals?: InputMaybe<TypeEnum>;
  in?: InputMaybe<Array<TypeEnum>>;
  not?: InputMaybe<NestedEnumTypeEnumNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TypeEnum>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableEnumCityEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<CityEnum>;
};

export type NullableEnumTypeEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<TypeEnum>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Object = {
  __typename?: 'Object';
  about?: Maybe<Scalars['String']['output']>;
  aboutImg?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<CityEnum>;
  costAED?: Maybe<Scalars['Int']['output']>;
  costRUB?: Maybe<Scalars['Int']['output']>;
  costUSD?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  isVisible: Scalars['Boolean']['output'];
  rooms?: Maybe<Scalars['Int']['output']>;
  space?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  type?: Maybe<TypeEnum>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ObjectAvgAggregateOutputType = {
  __typename?: 'ObjectAvgAggregateOutputType';
  bathrooms?: Maybe<Scalars['Float']['output']>;
  bedrooms?: Maybe<Scalars['Float']['output']>;
  costAED?: Maybe<Scalars['Float']['output']>;
  costRUB?: Maybe<Scalars['Float']['output']>;
  costUSD?: Maybe<Scalars['Float']['output']>;
  rooms?: Maybe<Scalars['Float']['output']>;
  space?: Maybe<Scalars['Float']['output']>;
};

export type ObjectAvgOrderByAggregateInput = {
  bathrooms?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  costAED?: InputMaybe<SortOrder>;
  costRUB?: InputMaybe<SortOrder>;
  costUSD?: InputMaybe<SortOrder>;
  rooms?: InputMaybe<SortOrder>;
  space?: InputMaybe<SortOrder>;
};

export type ObjectCountAggregateOutputType = {
  __typename?: 'ObjectCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  about: Scalars['Int']['output'];
  aboutImg: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  bathrooms: Scalars['Int']['output'];
  bedrooms: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  costAED: Scalars['Int']['output'];
  costRUB: Scalars['Int']['output'];
  costUSD: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  developer: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  isVisible: Scalars['Int']['output'];
  rooms: Scalars['Int']['output'];
  space: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ObjectCountOrderByAggregateInput = {
  about?: InputMaybe<SortOrder>;
  aboutImg?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  bathrooms?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  costAED?: InputMaybe<SortOrder>;
  costRUB?: InputMaybe<SortOrder>;
  costUSD?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  developer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rooms?: InputMaybe<SortOrder>;
  space?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ObjectCreateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  aboutImg?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityEnum>;
  costAED?: InputMaybe<Scalars['Int']['input']>;
  costRUB?: InputMaybe<Scalars['Int']['input']>;
  costUSD?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  rooms?: InputMaybe<Scalars['Int']['input']>;
  space?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<TypeEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ObjectCreateManyInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  aboutImg?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityEnum>;
  costAED?: InputMaybe<Scalars['Int']['input']>;
  costRUB?: InputMaybe<Scalars['Int']['input']>;
  costUSD?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  rooms?: InputMaybe<Scalars['Int']['input']>;
  space?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<TypeEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ObjectCreateimagesInput = {
  set: Array<Scalars['String']['input']>;
};

export type ObjectMaxAggregateOutputType = {
  __typename?: 'ObjectMaxAggregateOutputType';
  about?: Maybe<Scalars['String']['output']>;
  aboutImg?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<CityEnum>;
  costAED?: Maybe<Scalars['Int']['output']>;
  costRUB?: Maybe<Scalars['Int']['output']>;
  costUSD?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  rooms?: Maybe<Scalars['Int']['output']>;
  space?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ObjectMaxOrderByAggregateInput = {
  about?: InputMaybe<SortOrder>;
  aboutImg?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  bathrooms?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  costAED?: InputMaybe<SortOrder>;
  costRUB?: InputMaybe<SortOrder>;
  costUSD?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  developer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rooms?: InputMaybe<SortOrder>;
  space?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ObjectMinAggregateOutputType = {
  __typename?: 'ObjectMinAggregateOutputType';
  about?: Maybe<Scalars['String']['output']>;
  aboutImg?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<CityEnum>;
  costAED?: Maybe<Scalars['Int']['output']>;
  costRUB?: Maybe<Scalars['Int']['output']>;
  costUSD?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  rooms?: Maybe<Scalars['Int']['output']>;
  space?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ObjectMinOrderByAggregateInput = {
  about?: InputMaybe<SortOrder>;
  aboutImg?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  bathrooms?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  costAED?: InputMaybe<SortOrder>;
  costRUB?: InputMaybe<SortOrder>;
  costUSD?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  developer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rooms?: InputMaybe<SortOrder>;
  space?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ObjectOrderByWithAggregationInput = {
  _avg?: InputMaybe<ObjectAvgOrderByAggregateInput>;
  _count?: InputMaybe<ObjectCountOrderByAggregateInput>;
  _max?: InputMaybe<ObjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<ObjectMinOrderByAggregateInput>;
  _sum?: InputMaybe<ObjectSumOrderByAggregateInput>;
  about?: InputMaybe<SortOrder>;
  aboutImg?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  bathrooms?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  costAED?: InputMaybe<SortOrder>;
  costRUB?: InputMaybe<SortOrder>;
  costUSD?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  developer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rooms?: InputMaybe<SortOrder>;
  space?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ObjectOrderByWithRelationInput = {
  about?: InputMaybe<SortOrder>;
  aboutImg?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  bathrooms?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  costAED?: InputMaybe<SortOrder>;
  costRUB?: InputMaybe<SortOrder>;
  costUSD?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  developer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rooms?: InputMaybe<SortOrder>;
  space?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ObjectScalarFieldEnum {
  About = 'about',
  AboutImg = 'aboutImg',
  Address = 'address',
  Bathrooms = 'bathrooms',
  Bedrooms = 'bedrooms',
  City = 'city',
  CostAed = 'costAED',
  CostRub = 'costRUB',
  CostUsd = 'costUSD',
  CreatedAt = 'createdAt',
  Description = 'description',
  Developer = 'developer',
  Id = 'id',
  Images = 'images',
  IsVisible = 'isVisible',
  Rooms = 'rooms',
  Space = 'space',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type ObjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ObjectScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ObjectScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ObjectScalarWhereWithAggregatesInput>>;
  about?: InputMaybe<StringNullableWithAggregatesFilter>;
  aboutImg?: InputMaybe<StringNullableWithAggregatesFilter>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  bathrooms?: InputMaybe<IntNullableWithAggregatesFilter>;
  bedrooms?: InputMaybe<IntNullableWithAggregatesFilter>;
  city?: InputMaybe<EnumCityEnumNullableWithAggregatesFilter>;
  costAED?: InputMaybe<IntNullableWithAggregatesFilter>;
  costRUB?: InputMaybe<IntNullableWithAggregatesFilter>;
  costUSD?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  developer?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  isVisible?: InputMaybe<BoolWithAggregatesFilter>;
  rooms?: InputMaybe<IntNullableWithAggregatesFilter>;
  space?: InputMaybe<IntNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumTypeEnumNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ObjectSumAggregateOutputType = {
  __typename?: 'ObjectSumAggregateOutputType';
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  costAED?: Maybe<Scalars['Int']['output']>;
  costRUB?: Maybe<Scalars['Int']['output']>;
  costUSD?: Maybe<Scalars['Int']['output']>;
  rooms?: Maybe<Scalars['Int']['output']>;
  space?: Maybe<Scalars['Int']['output']>;
};

export type ObjectSumOrderByAggregateInput = {
  bathrooms?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  costAED?: InputMaybe<SortOrder>;
  costRUB?: InputMaybe<SortOrder>;
  costUSD?: InputMaybe<SortOrder>;
  rooms?: InputMaybe<SortOrder>;
  space?: InputMaybe<SortOrder>;
};

export type ObjectUncheckedCreateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  aboutImg?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityEnum>;
  costAED?: InputMaybe<Scalars['Int']['input']>;
  costRUB?: InputMaybe<Scalars['Int']['input']>;
  costUSD?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  rooms?: InputMaybe<Scalars['Int']['input']>;
  space?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<TypeEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ObjectUncheckedUpdateInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  aboutImg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bathrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bedrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableEnumCityEnumFieldUpdateOperationsInput>;
  costAED?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costRUB?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costUSD?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  developer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  space?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ObjectUncheckedUpdateManyInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  aboutImg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bathrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bedrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableEnumCityEnumFieldUpdateOperationsInput>;
  costAED?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costRUB?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costUSD?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  developer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  space?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ObjectUpdateInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  aboutImg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bathrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bedrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableEnumCityEnumFieldUpdateOperationsInput>;
  costAED?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costRUB?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costUSD?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  developer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  space?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ObjectUpdateManyMutationInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  aboutImg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bathrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bedrooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableEnumCityEnumFieldUpdateOperationsInput>;
  costAED?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costRUB?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  costUSD?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  developer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  space?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ObjectUpdateimagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ObjectWhereInput = {
  AND?: InputMaybe<Array<ObjectWhereInput>>;
  NOT?: InputMaybe<Array<ObjectWhereInput>>;
  OR?: InputMaybe<Array<ObjectWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  aboutImg?: InputMaybe<StringNullableFilter>;
  address?: InputMaybe<StringNullableFilter>;
  bathrooms?: InputMaybe<IntNullableFilter>;
  bedrooms?: InputMaybe<IntNullableFilter>;
  city?: InputMaybe<EnumCityEnumNullableFilter>;
  costAED?: InputMaybe<IntNullableFilter>;
  costRUB?: InputMaybe<IntNullableFilter>;
  costUSD?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  developer?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  isVisible?: InputMaybe<BoolFilter>;
  rooms?: InputMaybe<IntNullableFilter>;
  space?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTypeEnumNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ObjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAdmin?: Maybe<AggregateAdmin>;
  aggregateAdminRole?: Maybe<AggregateAdminRole>;
  aggregateApplication?: Maybe<AggregateApplication>;
  aggregateBlog?: Maybe<AggregateBlog>;
  aggregateObject?: Maybe<AggregateObject>;
  aggregateReview?: Maybe<AggregateReview>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstAdmin?: Maybe<Admin>;
  findFirstAdminRole?: Maybe<AdminRole>;
  findFirstApplication?: Maybe<Application>;
  findFirstBlog?: Maybe<Blog>;
  findFirstObject?: Maybe<Object>;
  findFirstReview?: Maybe<Review>;
  findFirstUser?: Maybe<User>;
  findManyAdmin?: Maybe<Array<Admin>>;
  findManyAdminCount: Scalars['Int']['output'];
  findManyAdminRole?: Maybe<Array<AdminRole>>;
  findManyAdminRoleCount: Scalars['Int']['output'];
  findManyApplication?: Maybe<Array<Application>>;
  findManyApplicationCount: Scalars['Int']['output'];
  findManyBlog?: Maybe<Array<Blog>>;
  findManyBlogCount: Scalars['Int']['output'];
  findManyObject?: Maybe<Array<Object>>;
  findManyObjectCount: Scalars['Int']['output'];
  findManyReview?: Maybe<Array<Review>>;
  findManyReviewCount: Scalars['Int']['output'];
  findManyUser?: Maybe<Array<User>>;
  findManyUserCount: Scalars['Int']['output'];
  findMeAdmin?: Maybe<Admin>;
  findUniqueAdmin?: Maybe<Admin>;
  findUniqueAdminRole?: Maybe<AdminRole>;
  findUniqueApplication?: Maybe<Application>;
  findUniqueBlog?: Maybe<Blog>;
  findUniqueObject?: Maybe<Object>;
  findUniqueReview?: Maybe<Review>;
  findUniqueUser?: Maybe<User>;
};


export type QueryAggregateAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryAggregateAdminRoleArgs = {
  cursor?: InputMaybe<AdminRoleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminRoleOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminRoleWhereInput>;
};


export type QueryAggregateApplicationArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ApplicationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryAggregateBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryAggregateObjectArgs = {
  cursor?: InputMaybe<ObjectWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ObjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ObjectWhereInput>;
};


export type QueryAggregateReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AdminScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryFindFirstAdminRoleArgs = {
  cursor?: InputMaybe<AdminRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AdminRoleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminRoleOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminRoleWhereInput>;
};


export type QueryFindFirstApplicationArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ApplicationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ApplicationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryFindFirstBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<BlogScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryFindFirstObjectArgs = {
  cursor?: InputMaybe<ObjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ObjectScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ObjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ObjectWhereInput>;
};


export type QueryFindFirstReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ReviewScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AdminScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryFindManyAdminCountArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AdminScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryFindManyAdminRoleArgs = {
  cursor?: InputMaybe<AdminRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AdminRoleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminRoleOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminRoleWhereInput>;
};


export type QueryFindManyAdminRoleCountArgs = {
  cursor?: InputMaybe<AdminRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AdminRoleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AdminRoleOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminRoleWhereInput>;
};


export type QueryFindManyApplicationArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ApplicationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ApplicationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryFindManyApplicationCountArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ApplicationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ApplicationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryFindManyBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<BlogScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryFindManyBlogCountArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<BlogScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryFindManyObjectArgs = {
  cursor?: InputMaybe<ObjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ObjectScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ObjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ObjectWhereInput>;
};


export type QueryFindManyObjectCountArgs = {
  cursor?: InputMaybe<ObjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ObjectScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ObjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ObjectWhereInput>;
};


export type QueryFindManyReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ReviewScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryFindManyReviewCountArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ReviewScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ReviewOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryFindUniqueAdminRoleArgs = {
  where: AdminRoleWhereUniqueInput;
};


export type QueryFindUniqueApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type QueryFindUniqueBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type QueryFindUniqueObjectArgs = {
  where: ObjectWhereUniqueInput;
};


export type QueryFindUniqueReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isVisible: Scalars['Boolean']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewAvgAggregateOutputType = {
  __typename?: 'ReviewAvgAggregateOutputType';
  rating?: Maybe<Scalars['Float']['output']>;
};

export type ReviewAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type ReviewCountAggregateOutputType = {
  __typename?: 'ReviewCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isVisible: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ReviewCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ReviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewMaxAggregateOutputType = {
  __typename?: 'ReviewMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ReviewMinAggregateOutputType = {
  __typename?: 'ReviewMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<ReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<ReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<ReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<ReviewSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ReviewScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  IsVisible = 'isVisible',
  Rating = 'rating',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isVisible?: InputMaybe<BoolWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ReviewSumAggregateOutputType = {
  __typename?: 'ReviewSumAggregateOutputType';
  rating?: Maybe<Scalars['Int']['output']>;
};

export type ReviewSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type ReviewUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVisible?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isVisible?: InputMaybe<BoolFilter>;
  rating?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum TypeEnum {
  Apartments = 'APARTMENTS',
  Plots = 'PLOTS',
  Townhouses = 'TOWNHOUSES',
  Villas = 'VILLAS'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isConfirmed: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isConfirmed: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isConfirmed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsConfirmed = 'isConfirmed',
  Name = 'name',
  Phone = 'phone',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isConfirmed?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isConfirmed?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};
