import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Addon = {
  __typename?: 'Addon';
  _count?: Maybe<AddonCount>;
  addonBlogCategory: Array<AddonBlogCategory>;
  blog: Array<Blog>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  imoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  purchaseUrl?: Maybe<Scalars['String']['output']>;
  purchasedByUsers: Array<User>;
  updatedAt: Scalars['DateTime']['output'];
};


export type AddonAddonBlogCategoryArgs = {
  cursor?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonBlogCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonBlogCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type AddonBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type AddonPurchasedByUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type AddonBlogCategory = {
  __typename?: 'AddonBlogCategory';
  _count?: Maybe<AddonBlogCategoryCount>;
  addon?: Maybe<Addon>;
  addonId: Scalars['String']['output'];
  blog: Array<Blog>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type AddonBlogCategoryBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};

export type AddonBlogCategoryCount = {
  __typename?: 'AddonBlogCategoryCount';
  blog: Scalars['Int']['output'];
};


export type AddonBlogCategoryCountBlogArgs = {
  where?: InputMaybe<BlogWhereInput>;
};

export type AddonBlogCategoryCountAggregate = {
  __typename?: 'AddonBlogCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  addonId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AddonBlogCategoryCountOrderByAggregateInput = {
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonBlogCategoryCreateInput = {
  addon?: InputMaybe<AddonCreateNestedOneWithoutAddonBlogCategoryInput>;
  blog?: InputMaybe<BlogCreateNestedManyWithoutAddonBlogCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonBlogCategoryCreateManyAddonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonBlogCategoryCreateManyAddonInputEnvelope = {
  data: Array<AddonBlogCategoryCreateManyAddonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddonBlogCategoryCreateManyInput = {
  addonId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonBlogCategoryCreateNestedManyWithoutAddonInput = {
  connect?: InputMaybe<Array<AddonBlogCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AddonBlogCategoryCreateOrConnectWithoutAddonInput>>;
  create?: InputMaybe<Array<AddonBlogCategoryCreateWithoutAddonInput>>;
  createMany?: InputMaybe<AddonBlogCategoryCreateManyAddonInputEnvelope>;
};

export type AddonBlogCategoryCreateNestedOneWithoutBlogInput = {
  connect?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddonBlogCategoryCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<AddonBlogCategoryCreateWithoutBlogInput>;
};

export type AddonBlogCategoryCreateOrConnectWithoutAddonInput = {
  create: AddonBlogCategoryCreateWithoutAddonInput;
  where: AddonBlogCategoryWhereUniqueInput;
};

export type AddonBlogCategoryCreateOrConnectWithoutBlogInput = {
  create: AddonBlogCategoryCreateWithoutBlogInput;
  where: AddonBlogCategoryWhereUniqueInput;
};

export type AddonBlogCategoryCreateWithoutAddonInput = {
  blog?: InputMaybe<BlogCreateNestedManyWithoutAddonBlogCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonBlogCategoryCreateWithoutBlogInput = {
  addon?: InputMaybe<AddonCreateNestedOneWithoutAddonBlogCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonBlogCategoryGroupBy = {
  __typename?: 'AddonBlogCategoryGroupBy';
  _count?: Maybe<AddonBlogCategoryCountAggregate>;
  _max?: Maybe<AddonBlogCategoryMaxAggregate>;
  _min?: Maybe<AddonBlogCategoryMinAggregate>;
  addonId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AddonBlogCategoryListRelationFilter = {
  every?: InputMaybe<AddonBlogCategoryWhereInput>;
  none?: InputMaybe<AddonBlogCategoryWhereInput>;
  some?: InputMaybe<AddonBlogCategoryWhereInput>;
};

export type AddonBlogCategoryMaxAggregate = {
  __typename?: 'AddonBlogCategoryMaxAggregate';
  addonId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AddonBlogCategoryMaxOrderByAggregateInput = {
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonBlogCategoryMinAggregate = {
  __typename?: 'AddonBlogCategoryMinAggregate';
  addonId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AddonBlogCategoryMinOrderByAggregateInput = {
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonBlogCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AddonBlogCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<AddonBlogCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<AddonBlogCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<AddonBlogCategoryMinOrderByAggregateInput>;
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonBlogCategoryOrderByWithRelationInput = {
  addon?: InputMaybe<AddonOrderByWithRelationInput>;
  addonId?: InputMaybe<SortOrder>;
  blog?: InputMaybe<BlogOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonBlogCategoryRelationFilter = {
  is?: InputMaybe<AddonBlogCategoryWhereInput>;
  isNot?: InputMaybe<AddonBlogCategoryWhereInput>;
};

export enum AddonBlogCategoryScalarFieldEnum {
  AddonId = 'addonId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type AddonBlogCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<AddonBlogCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<AddonBlogCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<AddonBlogCategoryScalarWhereInput>>;
  addonId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AddonBlogCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AddonBlogCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AddonBlogCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AddonBlogCategoryScalarWhereWithAggregatesInput>>;
  addonId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AddonBlogCategoryUpdateInput = {
  addon?: InputMaybe<AddonUpdateOneWithoutAddonBlogCategoryNestedInput>;
  blog?: InputMaybe<BlogUpdateManyWithoutAddonBlogCategoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonBlogCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonBlogCategoryUpdateManyWithWhereWithoutAddonInput = {
  data: AddonBlogCategoryUpdateManyMutationInput;
  where: AddonBlogCategoryScalarWhereInput;
};

export type AddonBlogCategoryUpdateManyWithoutAddonNestedInput = {
  connect?: InputMaybe<Array<AddonBlogCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AddonBlogCategoryCreateOrConnectWithoutAddonInput>>;
  create?: InputMaybe<Array<AddonBlogCategoryCreateWithoutAddonInput>>;
  createMany?: InputMaybe<AddonBlogCategoryCreateManyAddonInputEnvelope>;
  delete?: InputMaybe<Array<AddonBlogCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AddonBlogCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AddonBlogCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<AddonBlogCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<AddonBlogCategoryUpdateWithWhereUniqueWithoutAddonInput>>;
  updateMany?: InputMaybe<Array<AddonBlogCategoryUpdateManyWithWhereWithoutAddonInput>>;
  upsert?: InputMaybe<Array<AddonBlogCategoryUpsertWithWhereUniqueWithoutAddonInput>>;
};

export type AddonBlogCategoryUpdateOneWithoutBlogNestedInput = {
  connect?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddonBlogCategoryCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<AddonBlogCategoryCreateWithoutBlogInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<AddonBlogCategoryUpdateWithoutBlogInput>;
  upsert?: InputMaybe<AddonBlogCategoryUpsertWithoutBlogInput>;
};

export type AddonBlogCategoryUpdateWithWhereUniqueWithoutAddonInput = {
  data: AddonBlogCategoryUpdateWithoutAddonInput;
  where: AddonBlogCategoryWhereUniqueInput;
};

export type AddonBlogCategoryUpdateWithoutAddonInput = {
  blog?: InputMaybe<BlogUpdateManyWithoutAddonBlogCategoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonBlogCategoryUpdateWithoutBlogInput = {
  addon?: InputMaybe<AddonUpdateOneWithoutAddonBlogCategoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonBlogCategoryUpsertWithWhereUniqueWithoutAddonInput = {
  create: AddonBlogCategoryCreateWithoutAddonInput;
  update: AddonBlogCategoryUpdateWithoutAddonInput;
  where: AddonBlogCategoryWhereUniqueInput;
};

export type AddonBlogCategoryUpsertWithoutBlogInput = {
  create: AddonBlogCategoryCreateWithoutBlogInput;
  update: AddonBlogCategoryUpdateWithoutBlogInput;
};

export type AddonBlogCategoryWhereInput = {
  AND?: InputMaybe<Array<AddonBlogCategoryWhereInput>>;
  NOT?: InputMaybe<Array<AddonBlogCategoryWhereInput>>;
  OR?: InputMaybe<Array<AddonBlogCategoryWhereInput>>;
  addon?: InputMaybe<AddonRelationFilter>;
  addonId?: InputMaybe<StringFilter>;
  blog?: InputMaybe<BlogListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AddonBlogCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AddonCount = {
  __typename?: 'AddonCount';
  addonBlogCategory: Scalars['Int']['output'];
  blog: Scalars['Int']['output'];
  purchasedByUsers: Scalars['Int']['output'];
};


export type AddonCountAddonBlogCategoryArgs = {
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type AddonCountBlogArgs = {
  where?: InputMaybe<BlogWhereInput>;
};


export type AddonCountPurchasedByUsersArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type AddonCountAggregate = {
  __typename?: 'AddonCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  img: Scalars['Int']['output'];
  imoji: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  purchaseUrl: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AddonCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  purchaseUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonCreateInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryCreateNestedManyWithoutAddonInput>;
  blog?: InputMaybe<BlogCreateNestedManyWithoutAddonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  imoji?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purchaseUrl?: InputMaybe<Scalars['String']['input']>;
  purchasedByUsers?: InputMaybe<UserCreateNestedManyWithoutPurchasedAddonsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  imoji?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purchaseUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonCreateNestedManyWithoutPurchasedByUsersInput = {
  connect?: InputMaybe<Array<AddonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AddonCreateOrConnectWithoutPurchasedByUsersInput>>;
  create?: InputMaybe<Array<AddonCreateWithoutPurchasedByUsersInput>>;
};

export type AddonCreateNestedOneWithoutAddonBlogCategoryInput = {
  connect?: InputMaybe<AddonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddonCreateOrConnectWithoutAddonBlogCategoryInput>;
  create?: InputMaybe<AddonCreateWithoutAddonBlogCategoryInput>;
};

export type AddonCreateNestedOneWithoutBlogInput = {
  connect?: InputMaybe<AddonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddonCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<AddonCreateWithoutBlogInput>;
};

export type AddonCreateOrConnectWithoutAddonBlogCategoryInput = {
  create: AddonCreateWithoutAddonBlogCategoryInput;
  where: AddonWhereUniqueInput;
};

export type AddonCreateOrConnectWithoutBlogInput = {
  create: AddonCreateWithoutBlogInput;
  where: AddonWhereUniqueInput;
};

export type AddonCreateOrConnectWithoutPurchasedByUsersInput = {
  create: AddonCreateWithoutPurchasedByUsersInput;
  where: AddonWhereUniqueInput;
};

export type AddonCreateWithoutAddonBlogCategoryInput = {
  blog?: InputMaybe<BlogCreateNestedManyWithoutAddonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  imoji?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purchaseUrl?: InputMaybe<Scalars['String']['input']>;
  purchasedByUsers?: InputMaybe<UserCreateNestedManyWithoutPurchasedAddonsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonCreateWithoutBlogInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryCreateNestedManyWithoutAddonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  imoji?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purchaseUrl?: InputMaybe<Scalars['String']['input']>;
  purchasedByUsers?: InputMaybe<UserCreateNestedManyWithoutPurchasedAddonsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonCreateWithoutPurchasedByUsersInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryCreateNestedManyWithoutAddonInput>;
  blog?: InputMaybe<BlogCreateNestedManyWithoutAddonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  imoji?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purchaseUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddonGroupBy = {
  __typename?: 'AddonGroupBy';
  _count?: Maybe<AddonCountAggregate>;
  _max?: Maybe<AddonMaxAggregate>;
  _min?: Maybe<AddonMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  imoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  purchaseUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AddonListRelationFilter = {
  every?: InputMaybe<AddonWhereInput>;
  none?: InputMaybe<AddonWhereInput>;
  some?: InputMaybe<AddonWhereInput>;
};

export type AddonMaxAggregate = {
  __typename?: 'AddonMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  imoji?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  purchaseUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AddonMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  purchaseUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonMinAggregate = {
  __typename?: 'AddonMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  imoji?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  purchaseUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AddonMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  purchaseUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AddonOrderByWithAggregationInput = {
  _count?: InputMaybe<AddonCountOrderByAggregateInput>;
  _max?: InputMaybe<AddonMaxOrderByAggregateInput>;
  _min?: InputMaybe<AddonMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  purchaseUrl?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonOrderByWithRelationInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryOrderByRelationAggregateInput>;
  blog?: InputMaybe<BlogOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  purchaseUrl?: InputMaybe<SortOrderInput>;
  purchasedByUsers?: InputMaybe<UserOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddonRelationFilter = {
  is?: InputMaybe<AddonWhereInput>;
  isNot?: InputMaybe<AddonWhereInput>;
};

export enum AddonScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Img = 'img',
  Imoji = 'imoji',
  Name = 'name',
  PurchaseUrl = 'purchaseUrl',
  UpdatedAt = 'updatedAt'
}

export type AddonScalarWhereInput = {
  AND?: InputMaybe<Array<AddonScalarWhereInput>>;
  NOT?: InputMaybe<Array<AddonScalarWhereInput>>;
  OR?: InputMaybe<Array<AddonScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  img?: InputMaybe<StringFilter>;
  imoji?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  purchaseUrl?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AddonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AddonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AddonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AddonScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  img?: InputMaybe<StringWithAggregatesFilter>;
  imoji?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  purchaseUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AddonUpdateInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryUpdateManyWithoutAddonNestedInput>;
  blog?: InputMaybe<BlogUpdateManyWithoutAddonNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchaseUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purchasedByUsers?: InputMaybe<UserUpdateManyWithoutPurchasedAddonsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchaseUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonUpdateManyWithWhereWithoutPurchasedByUsersInput = {
  data: AddonUpdateManyMutationInput;
  where: AddonScalarWhereInput;
};

export type AddonUpdateManyWithoutPurchasedByUsersNestedInput = {
  connect?: InputMaybe<Array<AddonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AddonCreateOrConnectWithoutPurchasedByUsersInput>>;
  create?: InputMaybe<Array<AddonCreateWithoutPurchasedByUsersInput>>;
  delete?: InputMaybe<Array<AddonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AddonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AddonWhereUniqueInput>>;
  set?: InputMaybe<Array<AddonWhereUniqueInput>>;
  update?: InputMaybe<Array<AddonUpdateWithWhereUniqueWithoutPurchasedByUsersInput>>;
  updateMany?: InputMaybe<Array<AddonUpdateManyWithWhereWithoutPurchasedByUsersInput>>;
  upsert?: InputMaybe<Array<AddonUpsertWithWhereUniqueWithoutPurchasedByUsersInput>>;
};

export type AddonUpdateOneWithoutAddonBlogCategoryNestedInput = {
  connect?: InputMaybe<AddonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddonCreateOrConnectWithoutAddonBlogCategoryInput>;
  create?: InputMaybe<AddonCreateWithoutAddonBlogCategoryInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<AddonUpdateWithoutAddonBlogCategoryInput>;
  upsert?: InputMaybe<AddonUpsertWithoutAddonBlogCategoryInput>;
};

export type AddonUpdateOneWithoutBlogNestedInput = {
  connect?: InputMaybe<AddonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddonCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<AddonCreateWithoutBlogInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<AddonUpdateWithoutBlogInput>;
  upsert?: InputMaybe<AddonUpsertWithoutBlogInput>;
};

export type AddonUpdateWithWhereUniqueWithoutPurchasedByUsersInput = {
  data: AddonUpdateWithoutPurchasedByUsersInput;
  where: AddonWhereUniqueInput;
};

export type AddonUpdateWithoutAddonBlogCategoryInput = {
  blog?: InputMaybe<BlogUpdateManyWithoutAddonNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchaseUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purchasedByUsers?: InputMaybe<UserUpdateManyWithoutPurchasedAddonsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonUpdateWithoutBlogInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryUpdateManyWithoutAddonNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchaseUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purchasedByUsers?: InputMaybe<UserUpdateManyWithoutPurchasedAddonsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonUpdateWithoutPurchasedByUsersInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryUpdateManyWithoutAddonNestedInput>;
  blog?: InputMaybe<BlogUpdateManyWithoutAddonNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  img?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchaseUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddonUpsertWithWhereUniqueWithoutPurchasedByUsersInput = {
  create: AddonCreateWithoutPurchasedByUsersInput;
  update: AddonUpdateWithoutPurchasedByUsersInput;
  where: AddonWhereUniqueInput;
};

export type AddonUpsertWithoutAddonBlogCategoryInput = {
  create: AddonCreateWithoutAddonBlogCategoryInput;
  update: AddonUpdateWithoutAddonBlogCategoryInput;
};

export type AddonUpsertWithoutBlogInput = {
  create: AddonCreateWithoutBlogInput;
  update: AddonUpdateWithoutBlogInput;
};

export type AddonWhereInput = {
  AND?: InputMaybe<Array<AddonWhereInput>>;
  NOT?: InputMaybe<Array<AddonWhereInput>>;
  OR?: InputMaybe<Array<AddonWhereInput>>;
  addonBlogCategory?: InputMaybe<AddonBlogCategoryListRelationFilter>;
  blog?: InputMaybe<BlogListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  img?: InputMaybe<StringFilter>;
  imoji?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  purchaseUrl?: InputMaybe<StringNullableFilter>;
  purchasedByUsers?: InputMaybe<UserListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AddonWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAddon = {
  __typename?: 'AggregateAddon';
  _count?: Maybe<AddonCountAggregate>;
  _max?: Maybe<AddonMaxAggregate>;
  _min?: Maybe<AddonMinAggregate>;
};

export type AggregateAddonBlogCategory = {
  __typename?: 'AggregateAddonBlogCategory';
  _count?: Maybe<AddonBlogCategoryCountAggregate>;
  _max?: Maybe<AddonBlogCategoryMaxAggregate>;
  _min?: Maybe<AddonBlogCategoryMinAggregate>;
};

export type AggregateBlog = {
  __typename?: 'AggregateBlog';
  _count?: Maybe<BlogCountAggregate>;
  _max?: Maybe<BlogMaxAggregate>;
  _min?: Maybe<BlogMinAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregatePrompt = {
  __typename?: 'AggregatePrompt';
  _count?: Maybe<PromptCountAggregate>;
  _max?: Maybe<PromptMaxAggregate>;
  _min?: Maybe<PromptMinAggregate>;
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
};

export type AggregateTip = {
  __typename?: 'AggregateTip';
  _count?: Maybe<TipCountAggregate>;
  _max?: Maybe<TipMaxAggregate>;
  _min?: Maybe<TipMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Blog = {
  __typename?: 'Blog';
  addon?: Maybe<Addon>;
  addonBlogCategory?: Maybe<AddonBlogCategory>;
  addonBlogCategoryId?: Maybe<Scalars['String']['output']>;
  addonId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imoji: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BlogCountAggregate = {
  __typename?: 'BlogCountAggregate';
  _all: Scalars['Int']['output'];
  addonBlogCategoryId: Scalars['Int']['output'];
  addonId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imoji: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type BlogCountOrderByAggregateInput = {
  addonBlogCategoryId?: InputMaybe<SortOrder>;
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogCreateInput = {
  addon?: InputMaybe<AddonCreateNestedOneWithoutBlogInput>;
  addonBlogCategory?: InputMaybe<AddonBlogCategoryCreateNestedOneWithoutBlogInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogCreateManyAddonBlogCategoryInput = {
  addonId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogCreateManyAddonBlogCategoryInputEnvelope = {
  data: Array<BlogCreateManyAddonBlogCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogCreateManyAddonInput = {
  addonBlogCategoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogCreateManyAddonInputEnvelope = {
  data: Array<BlogCreateManyAddonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogCreateManyInput = {
  addonBlogCategoryId?: InputMaybe<Scalars['String']['input']>;
  addonId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogCreateNestedManyWithoutAddonBlogCategoryInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutAddonBlogCategoryInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutAddonBlogCategoryInput>>;
  createMany?: InputMaybe<BlogCreateManyAddonBlogCategoryInputEnvelope>;
};

export type BlogCreateNestedManyWithoutAddonInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutAddonInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutAddonInput>>;
  createMany?: InputMaybe<BlogCreateManyAddonInputEnvelope>;
};

export type BlogCreateOrConnectWithoutAddonBlogCategoryInput = {
  create: BlogCreateWithoutAddonBlogCategoryInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateOrConnectWithoutAddonInput = {
  create: BlogCreateWithoutAddonInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateWithoutAddonBlogCategoryInput = {
  addon?: InputMaybe<AddonCreateNestedOneWithoutBlogInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogCreateWithoutAddonInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryCreateNestedOneWithoutBlogInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogGroupBy = {
  __typename?: 'BlogGroupBy';
  _count?: Maybe<BlogCountAggregate>;
  _max?: Maybe<BlogMaxAggregate>;
  _min?: Maybe<BlogMinAggregate>;
  addonBlogCategoryId?: Maybe<Scalars['String']['output']>;
  addonId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imoji: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BlogListRelationFilter = {
  every?: InputMaybe<BlogWhereInput>;
  none?: InputMaybe<BlogWhereInput>;
  some?: InputMaybe<BlogWhereInput>;
};

export type BlogMaxAggregate = {
  __typename?: 'BlogMaxAggregate';
  addonBlogCategoryId?: Maybe<Scalars['String']['output']>;
  addonId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imoji?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogMaxOrderByAggregateInput = {
  addonBlogCategoryId?: InputMaybe<SortOrder>;
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogMinAggregate = {
  __typename?: 'BlogMinAggregate';
  addonBlogCategoryId?: Maybe<Scalars['String']['output']>;
  addonId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imoji?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogMinOrderByAggregateInput = {
  addonBlogCategoryId?: InputMaybe<SortOrder>;
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BlogOrderByWithAggregationInput = {
  _count?: InputMaybe<BlogCountOrderByAggregateInput>;
  _max?: InputMaybe<BlogMaxOrderByAggregateInput>;
  _min?: InputMaybe<BlogMinOrderByAggregateInput>;
  addonBlogCategoryId?: InputMaybe<SortOrderInput>;
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogOrderByWithRelationInput = {
  addon?: InputMaybe<AddonOrderByWithRelationInput>;
  addonBlogCategory?: InputMaybe<AddonBlogCategoryOrderByWithRelationInput>;
  addonBlogCategoryId?: InputMaybe<SortOrderInput>;
  addonId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum BlogScalarFieldEnum {
  AddonBlogCategoryId = 'addonBlogCategoryId',
  AddonId = 'addonId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Imoji = 'imoji',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type BlogScalarWhereInput = {
  AND?: InputMaybe<Array<BlogScalarWhereInput>>;
  NOT?: InputMaybe<Array<BlogScalarWhereInput>>;
  OR?: InputMaybe<Array<BlogScalarWhereInput>>;
  addonBlogCategoryId?: InputMaybe<StringNullableFilter>;
  addonId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imoji?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  addonBlogCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  addonId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imoji?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type BlogUpdateInput = {
  addon?: InputMaybe<AddonUpdateOneWithoutBlogNestedInput>;
  addonBlogCategory?: InputMaybe<AddonBlogCategoryUpdateOneWithoutBlogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateManyWithWhereWithoutAddonBlogCategoryInput = {
  data: BlogUpdateManyMutationInput;
  where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithWhereWithoutAddonInput = {
  data: BlogUpdateManyMutationInput;
  where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithoutAddonBlogCategoryNestedInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutAddonBlogCategoryInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutAddonBlogCategoryInput>>;
  createMany?: InputMaybe<BlogCreateManyAddonBlogCategoryInputEnvelope>;
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutAddonBlogCategoryInput>>;
  updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutAddonBlogCategoryInput>>;
  upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutAddonBlogCategoryInput>>;
};

export type BlogUpdateManyWithoutAddonNestedInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutAddonInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutAddonInput>>;
  createMany?: InputMaybe<BlogCreateManyAddonInputEnvelope>;
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutAddonInput>>;
  updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutAddonInput>>;
  upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutAddonInput>>;
};

export type BlogUpdateWithWhereUniqueWithoutAddonBlogCategoryInput = {
  data: BlogUpdateWithoutAddonBlogCategoryInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpdateWithWhereUniqueWithoutAddonInput = {
  data: BlogUpdateWithoutAddonInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpdateWithoutAddonBlogCategoryInput = {
  addon?: InputMaybe<AddonUpdateOneWithoutBlogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateWithoutAddonInput = {
  addonBlogCategory?: InputMaybe<AddonBlogCategoryUpdateOneWithoutBlogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpsertWithWhereUniqueWithoutAddonBlogCategoryInput = {
  create: BlogCreateWithoutAddonBlogCategoryInput;
  update: BlogUpdateWithoutAddonBlogCategoryInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpsertWithWhereUniqueWithoutAddonInput = {
  create: BlogCreateWithoutAddonInput;
  update: BlogUpdateWithoutAddonInput;
  where: BlogWhereUniqueInput;
};

export type BlogWhereInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  addon?: InputMaybe<AddonRelationFilter>;
  addonBlogCategory?: InputMaybe<AddonBlogCategoryRelationFilter>;
  addonBlogCategoryId?: InputMaybe<StringNullableFilter>;
  addonId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imoji?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
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

export type Category = {
  __typename?: 'Category';
  _count?: Maybe<CategoryCount>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  purchasedByUsers: Array<User>;
  tasks: Array<Task>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type CategoryPurchasedByUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type CategoryTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  products: Scalars['Int']['output'];
  purchasedByUsers: Scalars['Int']['output'];
  tasks: Scalars['Int']['output'];
};


export type CategoryCountProductsArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type CategoryCountPurchasedByUsersArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type CategoryCountTasksArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  purchasedByUsers?: InputMaybe<UserCreateNestedManyWithoutPurchasedCategoriesInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateNestedManyWithoutPurchasedByUsersInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutPurchasedByUsersInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutPurchasedByUsersInput>>;
};

export type CategoryCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CategoryCreateWithoutProductsInput>;
};

export type CategoryCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<CategoryCreateWithoutTasksInput>;
};

export type CategoryCreateOrConnectWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutPurchasedByUsersInput = {
  create: CategoryCreateWithoutPurchasedByUsersInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutTasksInput = {
  create: CategoryCreateWithoutTasksInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutProductsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purchasedByUsers?: InputMaybe<UserCreateNestedManyWithoutPurchasedCategoriesInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateWithoutPurchasedByUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateWithoutTasksInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  purchasedByUsers?: InputMaybe<UserCreateNestedManyWithoutPurchasedCategoriesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  purchasedByUsers?: InputMaybe<UserOrderByRelationAggregateInput>;
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  purchasedByUsers?: InputMaybe<UserUpdateManyWithoutPurchasedCategoriesNestedInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutCategoryNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutPurchasedByUsersInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutPurchasedByUsersNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutPurchasedByUsersInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutPurchasedByUsersInput>>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutPurchasedByUsersInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutPurchasedByUsersInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutPurchasedByUsersInput>>;
};

export type CategoryUpdateOneWithoutProductsNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CategoryCreateWithoutProductsInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CategoryUpdateWithoutProductsInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutProductsInput>;
};

export type CategoryUpdateOneWithoutTasksNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<CategoryCreateWithoutTasksInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CategoryUpdateWithoutTasksInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutTasksInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutPurchasedByUsersInput = {
  data: CategoryUpdateWithoutPurchasedByUsersInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutProductsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchasedByUsers?: InputMaybe<UserUpdateManyWithoutPurchasedCategoriesNestedInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutCategoryNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutPurchasedByUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutCategoryNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutTasksInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  purchasedByUsers?: InputMaybe<UserUpdateManyWithoutPurchasedCategoriesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutPurchasedByUsersInput = {
  create: CategoryCreateWithoutPurchasedByUsersInput;
  update: CategoryUpdateWithoutPurchasedByUsersInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  update: CategoryUpdateWithoutProductsInput;
};

export type CategoryUpsertWithoutTasksInput = {
  create: CategoryCreateWithoutTasksInput;
  update: CategoryUpdateWithoutTasksInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  purchasedByUsers?: InputMaybe<UserListRelationFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** New user data */
export type CreateOneUserArgsCustom = {
  avater?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

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

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type EnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
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

export type LoginResponsce = {
  __typename?: 'LoginResponsce';
  accessToken?: Maybe<Scalars['String']['output']>;
  isAuthenticated: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAddon: AffectedRowsOutput;
  createManyAddonBlogCategory: AffectedRowsOutput;
  createManyBlog: AffectedRowsOutput;
  createManyCategory: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManyPrompt: AffectedRowsOutput;
  createManyTask: AffectedRowsOutput;
  createManyTip: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneAddon: Addon;
  createOneAddonBlogCategory: AddonBlogCategory;
  createOneBlog: Blog;
  createOneCategory: Category;
  createOneProduct: Product;
  createOnePrompt: Prompt;
  createOneTask: Task;
  createOneTip: Tip;
  createOneUser: User;
  deleteManyAddon: AffectedRowsOutput;
  deleteManyAddonBlogCategory: AffectedRowsOutput;
  deleteManyBlog: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyPrompt: AffectedRowsOutput;
  deleteManyTask: AffectedRowsOutput;
  deleteManyTip: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneAddon?: Maybe<Addon>;
  deleteOneAddonBlogCategory?: Maybe<AddonBlogCategory>;
  deleteOneBlog?: Maybe<Blog>;
  deleteOneCategory?: Maybe<Category>;
  deleteOneProduct?: Maybe<Product>;
  deleteOnePrompt?: Maybe<Prompt>;
  deleteOneTask?: Maybe<Task>;
  deleteOneTip?: Maybe<Tip>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<LoginResponsce>;
  loginAdmin?: Maybe<LoginResponsce>;
  register?: Maybe<DefaultResponsce>;
  registerByAdmin?: Maybe<DefaultResponsce>;
  updateManyAddon: AffectedRowsOutput;
  updateManyAddonBlogCategory: AffectedRowsOutput;
  updateManyBlog: AffectedRowsOutput;
  updateManyCategory: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManyPrompt: AffectedRowsOutput;
  updateManyTask: AffectedRowsOutput;
  updateManyTip: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneAddon?: Maybe<Addon>;
  updateOneAddonBlogCategory?: Maybe<AddonBlogCategory>;
  updateOneBlog?: Maybe<Blog>;
  updateOneCategory?: Maybe<Category>;
  updateOneProduct?: Maybe<Product>;
  updateOnePrompt?: Maybe<Prompt>;
  updateOneTask?: Maybe<Task>;
  updateOneTip?: Maybe<Tip>;
  updateOneUser?: Maybe<User>;
  uploadFile?: Maybe<FileUploadResponsce>;
  upsertOneAddon: Addon;
  upsertOneAddonBlogCategory: AddonBlogCategory;
  upsertOneBlog: Blog;
  upsertOneCategory: Category;
  upsertOneProduct: Product;
  upsertOnePrompt: Prompt;
  upsertOneTask: Task;
  upsertOneTip: Tip;
  upsertOneUser: User;
  userUpdateByAdmin?: Maybe<DefaultResponsce>;
};


export type MutationCreateManyAddonArgs = {
  data: Array<AddonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAddonBlogCategoryArgs = {
  data: Array<AddonBlogCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyBlogArgs = {
  data: Array<BlogCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPromptArgs = {
  data: Array<PromptCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTaskArgs = {
  data: Array<TaskCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTipArgs = {
  data: Array<TipCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAddonArgs = {
  data: AddonCreateInput;
};


export type MutationCreateOneAddonBlogCategoryArgs = {
  data: AddonBlogCategoryCreateInput;
};


export type MutationCreateOneBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOnePromptArgs = {
  data: PromptCreateInput;
};


export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateOneTipArgs = {
  data: TipCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyAddonArgs = {
  where?: InputMaybe<AddonWhereInput>;
};


export type MutationDeleteManyAddonBlogCategoryArgs = {
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type MutationDeleteManyBlogArgs = {
  where?: InputMaybe<BlogWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManyPromptArgs = {
  where?: InputMaybe<PromptWhereInput>;
};


export type MutationDeleteManyTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationDeleteManyTipArgs = {
  where?: InputMaybe<TipWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneAddonArgs = {
  where: AddonWhereUniqueInput;
};


export type MutationDeleteOneAddonBlogCategoryArgs = {
  where: AddonBlogCategoryWhereUniqueInput;
};


export type MutationDeleteOneBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOnePromptArgs = {
  where: PromptWhereUniqueInput;
};


export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteOneTipArgs = {
  where: TipWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: CreateOneUserArgsCustom;
};


export type MutationRegisterByAdminArgs = {
  data: UserCreateInput;
};


export type MutationUpdateManyAddonArgs = {
  data: AddonUpdateManyMutationInput;
  where?: InputMaybe<AddonWhereInput>;
};


export type MutationUpdateManyAddonBlogCategoryArgs = {
  data: AddonBlogCategoryUpdateManyMutationInput;
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type MutationUpdateManyBlogArgs = {
  data: BlogUpdateManyMutationInput;
  where?: InputMaybe<BlogWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManyPromptArgs = {
  data: PromptUpdateManyMutationInput;
  where?: InputMaybe<PromptWhereInput>;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationUpdateManyTipArgs = {
  data: TipUpdateManyMutationInput;
  where?: InputMaybe<TipWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneAddonArgs = {
  data: AddonUpdateInput;
  where: AddonWhereUniqueInput;
};


export type MutationUpdateOneAddonBlogCategoryArgs = {
  data: AddonBlogCategoryUpdateInput;
  where: AddonBlogCategoryWhereUniqueInput;
};


export type MutationUpdateOneBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOnePromptArgs = {
  data: PromptUpdateInput;
  where: PromptWhereUniqueInput;
};


export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateOneTipArgs = {
  data: TipUpdateInput;
  where: TipWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpsertOneAddonArgs = {
  create: AddonCreateInput;
  update: AddonUpdateInput;
  where: AddonWhereUniqueInput;
};


export type MutationUpsertOneAddonBlogCategoryArgs = {
  create: AddonBlogCategoryCreateInput;
  update: AddonBlogCategoryUpdateInput;
  where: AddonBlogCategoryWhereUniqueInput;
};


export type MutationUpsertOneBlogArgs = {
  create: BlogCreateInput;
  update: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOnePromptArgs = {
  create: PromptCreateInput;
  update: PromptUpdateInput;
  where: PromptWhereUniqueInput;
};


export type MutationUpsertOneTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertOneTipArgs = {
  create: TipCreateInput;
  update: TipUpdateInput;
  where: TipWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUserUpdateByAdminArgs = {
  data: UserUpdateInput;
  newPass?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  updatePass?: InputMaybe<Scalars['Boolean']['input']>;
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

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
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

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  moneyBackGuarantee: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  taskAutomateCount: Scalars['Int']['output'];
  topTierPromptCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  moneyBackGuarantee?: Maybe<Scalars['Float']['output']>;
  taskAutomateCount?: Maybe<Scalars['Float']['output']>;
  topTierPromptCount?: Maybe<Scalars['Float']['output']>;
};

export type ProductAvgOrderByAggregateInput = {
  moneyBackGuarantee?: InputMaybe<SortOrder>;
  taskAutomateCount?: InputMaybe<SortOrder>;
  topTierPromptCount?: InputMaybe<SortOrder>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  moneyBackGuarantee: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  taskAutomateCount: Scalars['Int']['output'];
  topTierPromptCount: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  moneyBackGuarantee?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  taskAutomateCount?: InputMaybe<SortOrder>;
  topTierPromptCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  category?: InputMaybe<CategoryCreateNestedOneWithoutProductsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  moneyBackGuarantee: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  taskAutomateCount: Scalars['Int']['input'];
  topTierPromptCount: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  moneyBackGuarantee: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  taskAutomateCount: Scalars['Int']['input'];
  topTierPromptCount: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCategoryInputEnvelope = {
  data: Array<ProductCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyInput = {
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  moneyBackGuarantee: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  taskAutomateCount: Scalars['Int']['input'];
  topTierPromptCount: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyCategoryInputEnvelope>;
};

export type ProductCreateOrConnectWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  moneyBackGuarantee: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  taskAutomateCount: Scalars['Int']['input'];
  topTierPromptCount: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  moneyBackGuarantee: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  taskAutomateCount: Scalars['Int']['output'];
  topTierPromptCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  moneyBackGuarantee?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  taskAutomateCount?: Maybe<Scalars['Int']['output']>;
  topTierPromptCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  moneyBackGuarantee?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  taskAutomateCount?: InputMaybe<SortOrder>;
  topTierPromptCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  moneyBackGuarantee?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  taskAutomateCount?: Maybe<Scalars['Int']['output']>;
  topTierPromptCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  moneyBackGuarantee?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  taskAutomateCount?: InputMaybe<SortOrder>;
  topTierPromptCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  moneyBackGuarantee?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  taskAutomateCount?: InputMaybe<SortOrder>;
  topTierPromptCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  moneyBackGuarantee?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  taskAutomateCount?: InputMaybe<SortOrder>;
  topTierPromptCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ProductScalarFieldEnum {
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  MoneyBackGuarantee = 'moneyBackGuarantee',
  Name = 'name',
  Slug = 'slug',
  TaskAutomateCount = 'taskAutomateCount',
  TopTierPromptCount = 'topTierPromptCount',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  moneyBackGuarantee?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  taskAutomateCount?: InputMaybe<IntFilter>;
  topTierPromptCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  moneyBackGuarantee?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  taskAutomateCount?: InputMaybe<IntWithAggregatesFilter>;
  topTierPromptCount?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  moneyBackGuarantee?: Maybe<Scalars['Int']['output']>;
  taskAutomateCount?: Maybe<Scalars['Int']['output']>;
  topTierPromptCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductSumOrderByAggregateInput = {
  moneyBackGuarantee?: InputMaybe<SortOrder>;
  taskAutomateCount?: InputMaybe<SortOrder>;
  topTierPromptCount?: InputMaybe<SortOrder>;
};

export type ProductUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyBackGuarantee?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskAutomateCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  topTierPromptCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyBackGuarantee?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskAutomateCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  topTierPromptCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ProductUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyBackGuarantee?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskAutomateCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  topTierPromptCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  update: ProductUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  moneyBackGuarantee?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  taskAutomateCount?: InputMaybe<IntFilter>;
  topTierPromptCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Prompt = {
  __typename?: 'Prompt';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  task?: Maybe<Task>;
  taskId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PromptCountAggregate = {
  __typename?: 'PromptCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PromptCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PromptCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  task?: InputMaybe<TaskCreateNestedOneWithoutPromptsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromptCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  taskId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromptCreateManyTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromptCreateManyTaskInputEnvelope = {
  data: Array<PromptCreateManyTaskInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PromptCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<PromptWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromptCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<PromptCreateWithoutTaskInput>>;
  createMany?: InputMaybe<PromptCreateManyTaskInputEnvelope>;
};

export type PromptCreateOrConnectWithoutTaskInput = {
  create: PromptCreateWithoutTaskInput;
  where: PromptWhereUniqueInput;
};

export type PromptCreateWithoutTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromptGroupBy = {
  __typename?: 'PromptGroupBy';
  _count?: Maybe<PromptCountAggregate>;
  _max?: Maybe<PromptMaxAggregate>;
  _min?: Maybe<PromptMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  taskId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PromptListRelationFilter = {
  every?: InputMaybe<PromptWhereInput>;
  none?: InputMaybe<PromptWhereInput>;
  some?: InputMaybe<PromptWhereInput>;
};

export type PromptMaxAggregate = {
  __typename?: 'PromptMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PromptMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PromptMinAggregate = {
  __typename?: 'PromptMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PromptMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PromptOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PromptOrderByWithAggregationInput = {
  _count?: InputMaybe<PromptCountOrderByAggregateInput>;
  _max?: InputMaybe<PromptMaxOrderByAggregateInput>;
  _min?: InputMaybe<PromptMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PromptOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PromptScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  TaskId = 'taskId',
  UpdatedAt = 'updatedAt'
}

export type PromptScalarWhereInput = {
  AND?: InputMaybe<Array<PromptScalarWhereInput>>;
  NOT?: InputMaybe<Array<PromptScalarWhereInput>>;
  OR?: InputMaybe<Array<PromptScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  taskId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PromptScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PromptScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PromptScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PromptScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  taskId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PromptUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutPromptsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromptUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromptUpdateManyWithWhereWithoutTaskInput = {
  data: PromptUpdateManyMutationInput;
  where: PromptScalarWhereInput;
};

export type PromptUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<PromptWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromptCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<PromptCreateWithoutTaskInput>>;
  createMany?: InputMaybe<PromptCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<PromptWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PromptScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PromptWhereUniqueInput>>;
  set?: InputMaybe<Array<PromptWhereUniqueInput>>;
  update?: InputMaybe<Array<PromptUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<PromptUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<PromptUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type PromptUpdateWithWhereUniqueWithoutTaskInput = {
  data: PromptUpdateWithoutTaskInput;
  where: PromptWhereUniqueInput;
};

export type PromptUpdateWithoutTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromptUpsertWithWhereUniqueWithoutTaskInput = {
  create: PromptCreateWithoutTaskInput;
  update: PromptUpdateWithoutTaskInput;
  where: PromptWhereUniqueInput;
};

export type PromptWhereInput = {
  AND?: InputMaybe<Array<PromptWhereInput>>;
  NOT?: InputMaybe<Array<PromptWhereInput>>;
  OR?: InputMaybe<Array<PromptWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PromptWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  addon?: Maybe<Addon>;
  addonBlogCategories: Array<AddonBlogCategory>;
  addonBlogCategory?: Maybe<AddonBlogCategory>;
  addons: Array<Addon>;
  aggregateAddon: AggregateAddon;
  aggregateAddonBlogCategory: AggregateAddonBlogCategory;
  aggregateBlog: AggregateBlog;
  aggregateCategory: AggregateCategory;
  aggregateProduct: AggregateProduct;
  aggregatePrompt: AggregatePrompt;
  aggregateTask: AggregateTask;
  aggregateTip: AggregateTip;
  aggregateUser: AggregateUser;
  blog?: Maybe<Blog>;
  blogs: Array<Blog>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  findFirstAddon?: Maybe<Addon>;
  findFirstAddonBlogCategory?: Maybe<AddonBlogCategory>;
  findFirstAddonBlogCategoryOrThrow?: Maybe<AddonBlogCategory>;
  findFirstAddonOrThrow?: Maybe<Addon>;
  findFirstBlog?: Maybe<Blog>;
  findFirstBlogOrThrow?: Maybe<Blog>;
  findFirstCategory?: Maybe<Category>;
  findFirstCategoryOrThrow?: Maybe<Category>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductOrThrow?: Maybe<Product>;
  findFirstPrompt?: Maybe<Prompt>;
  findFirstPromptOrThrow?: Maybe<Prompt>;
  findFirstTask?: Maybe<Task>;
  findFirstTaskOrThrow?: Maybe<Task>;
  findFirstTip?: Maybe<Tip>;
  findFirstTipOrThrow?: Maybe<Tip>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getAddon?: Maybe<Addon>;
  getAddonBlogCategory?: Maybe<AddonBlogCategory>;
  getBlog?: Maybe<Blog>;
  getCategory?: Maybe<Category>;
  getProduct?: Maybe<Product>;
  getPrompt?: Maybe<Prompt>;
  getTask?: Maybe<Task>;
  getTip?: Maybe<Tip>;
  getUser?: Maybe<User>;
  getUserAddons: Array<Addon>;
  getUserBlogSingle: Blog;
  getUserCategories: Array<Category>;
  getUserNotPurchasedAddons: Array<Addon>;
  getUserProducts: Array<Product>;
  getUserPurchasedSingleAddon: Addon;
  getUserTasks: Array<Task>;
  groupByAddon: Array<AddonGroupBy>;
  groupByAddonBlogCategory: Array<AddonBlogCategoryGroupBy>;
  groupByBlog: Array<BlogGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupByPrompt: Array<PromptGroupBy>;
  groupByTask: Array<TaskGroupBy>;
  groupByTip: Array<TipGroupBy>;
  groupByUser: Array<UserGroupBy>;
  product?: Maybe<Product>;
  products: Array<Product>;
  prompt?: Maybe<Prompt>;
  prompts: Array<Prompt>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
  tip?: Maybe<Tip>;
  tips: Array<Tip>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAddonArgs = {
  where: AddonWhereUniqueInput;
};


export type QueryAddonBlogCategoriesArgs = {
  cursor?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonBlogCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonBlogCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type QueryAddonBlogCategoryArgs = {
  where: AddonBlogCategoryWhereUniqueInput;
};


export type QueryAddonsArgs = {
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type QueryAggregateAddonArgs = {
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type QueryAggregateAddonBlogCategoryArgs = {
  cursor?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AddonBlogCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type QueryAggregateBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregatePromptArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PromptOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromptWhereInput>;
};


export type QueryAggregateTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryAggregateTipArgs = {
  cursor?: InputMaybe<TipWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type QueryBlogsArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindFirstAddonArgs = {
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type QueryFindFirstAddonBlogCategoryArgs = {
  cursor?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonBlogCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonBlogCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type QueryFindFirstAddonBlogCategoryOrThrowArgs = {
  cursor?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonBlogCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonBlogCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type QueryFindFirstAddonOrThrowArgs = {
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type QueryFindFirstBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryFindFirstBlogOrThrowArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstCategoryOrThrowArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductOrThrowArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstPromptArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromptScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromptOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromptWhereInput>;
};


export type QueryFindFirstPromptOrThrowArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromptScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromptOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromptWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTaskOrThrowArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTipArgs = {
  cursor?: InputMaybe<TipWhereUniqueInput>;
  distinct?: InputMaybe<Array<TipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipWhereInput>;
};


export type QueryFindFirstTipOrThrowArgs = {
  cursor?: InputMaybe<TipWhereUniqueInput>;
  distinct?: InputMaybe<Array<TipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetAddonArgs = {
  where: AddonWhereUniqueInput;
};


export type QueryGetAddonBlogCategoryArgs = {
  where: AddonBlogCategoryWhereUniqueInput;
};


export type QueryGetBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type QueryGetCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGetPromptArgs = {
  where: PromptWhereUniqueInput;
};


export type QueryGetTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryGetTipArgs = {
  where: TipWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetUserAddonsArgs = {
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type QueryGetUserBlogSingleArgs = {
  where: BlogWhereUniqueInput;
};


export type QueryGetUserCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGetUserNotPurchasedAddonsArgs = {
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type QueryGetUserProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGetUserPurchasedSingleAddonArgs = {
  where: AddonWhereUniqueInput;
};


export type QueryGetUserTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryGroupByAddonArgs = {
  by: Array<AddonScalarFieldEnum>;
  having?: InputMaybe<AddonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AddonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type QueryGroupByAddonBlogCategoryArgs = {
  by: Array<AddonBlogCategoryScalarFieldEnum>;
  having?: InputMaybe<AddonBlogCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AddonBlogCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonBlogCategoryWhereInput>;
};


export type QueryGroupByBlogArgs = {
  by: Array<BlogScalarFieldEnum>;
  having?: InputMaybe<BlogScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BlogOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupByPromptArgs = {
  by: Array<PromptScalarFieldEnum>;
  having?: InputMaybe<PromptScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PromptOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromptWhereInput>;
};


export type QueryGroupByTaskArgs = {
  by: Array<TaskScalarFieldEnum>;
  having?: InputMaybe<TaskScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryGroupByTipArgs = {
  by: Array<TipScalarFieldEnum>;
  having?: InputMaybe<TipScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TipOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryPromptArgs = {
  where: PromptWhereUniqueInput;
};


export type QueryPromptsArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromptScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromptOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromptWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryTipArgs = {
  where: TipWhereUniqueInput;
};


export type QueryTipsArgs = {
  cursor?: InputMaybe<TipWhereUniqueInput>;
  distinct?: InputMaybe<Array<TipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

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

export type Task = {
  __typename?: 'Task';
  _count?: Maybe<TaskCount>;
  category?: Maybe<Category>;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imoji: Scalars['String']['output'];
  name: Scalars['String']['output'];
  prompts: Array<Prompt>;
  slug: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  tips: Array<Tip>;
  updatedAt: Scalars['DateTime']['output'];
};


export type TaskPromptsArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromptScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromptOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromptWhereInput>;
};


export type TaskTipsArgs = {
  cursor?: InputMaybe<TipWhereUniqueInput>;
  distinct?: InputMaybe<Array<TipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipWhereInput>;
};

export type TaskCount = {
  __typename?: 'TaskCount';
  prompts: Scalars['Int']['output'];
  tips: Scalars['Int']['output'];
};


export type TaskCountPromptsArgs = {
  where?: InputMaybe<PromptWhereInput>;
};


export type TaskCountTipsArgs = {
  where?: InputMaybe<TipWhereInput>;
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imoji: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TaskCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskCreateInput = {
  category?: InputMaybe<CategoryCreateNestedOneWithoutTasksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
  prompts?: InputMaybe<PromptCreateNestedManyWithoutTaskInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TaskCreatetagsInput>;
  tips?: InputMaybe<TipCreateNestedManyWithoutTaskInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TaskCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateManyCategoryInputEnvelope = {
  data: Array<TaskCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskCreateManyInput = {
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TaskCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<TaskCreateManyCategoryInputEnvelope>;
};

export type TaskCreateNestedOneWithoutPromptsInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutPromptsInput>;
  create?: InputMaybe<TaskCreateWithoutPromptsInput>;
};

export type TaskCreateNestedOneWithoutTipsInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutTipsInput>;
  create?: InputMaybe<TaskCreateWithoutTipsInput>;
};

export type TaskCreateOrConnectWithoutCategoryInput = {
  create: TaskCreateWithoutCategoryInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutPromptsInput = {
  create: TaskCreateWithoutPromptsInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutTipsInput = {
  create: TaskCreateWithoutTipsInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
  prompts?: InputMaybe<PromptCreateNestedManyWithoutTaskInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TaskCreatetagsInput>;
  tips?: InputMaybe<TipCreateNestedManyWithoutTaskInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateWithoutPromptsInput = {
  category?: InputMaybe<CategoryCreateNestedOneWithoutTasksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TaskCreatetagsInput>;
  tips?: InputMaybe<TipCreateNestedManyWithoutTaskInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateWithoutTipsInput = {
  category?: InputMaybe<CategoryCreateNestedOneWithoutTasksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
  prompts?: InputMaybe<PromptCreateNestedManyWithoutTaskInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TaskCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreatetagsInput = {
  set: Array<Scalars['String']['input']>;
};

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy';
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imoji: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TaskListRelationFilter = {
  every?: InputMaybe<TaskWhereInput>;
  none?: InputMaybe<TaskWhereInput>;
  some?: InputMaybe<TaskWhereInput>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imoji?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imoji?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithAggregationInput = {
  _count?: InputMaybe<TaskCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskMinOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imoji?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  prompts?: InputMaybe<PromptOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  tips?: InputMaybe<TipOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export enum TaskScalarFieldEnum {
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Imoji = 'imoji',
  Name = 'name',
  Slug = 'slug',
  Tags = 'tags',
  UpdatedAt = 'updatedAt'
}

export type TaskScalarWhereInput = {
  AND?: InputMaybe<Array<TaskScalarWhereInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imoji?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imoji?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TaskUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneWithoutTasksNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prompts?: InputMaybe<PromptUpdateManyWithoutTaskNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TaskUpdatetagsInput>;
  tips?: InputMaybe<TipUpdateManyWithoutTaskNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TaskUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithWhereWithoutCategoryInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<TaskCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type TaskUpdateOneWithoutPromptsNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutPromptsInput>;
  create?: InputMaybe<TaskCreateWithoutPromptsInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<TaskUpdateWithoutPromptsInput>;
  upsert?: InputMaybe<TaskUpsertWithoutPromptsInput>;
};

export type TaskUpdateOneWithoutTipsNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutTipsInput>;
  create?: InputMaybe<TaskCreateWithoutTipsInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<TaskUpdateWithoutTipsInput>;
  upsert?: InputMaybe<TaskUpsertWithoutTipsInput>;
};

export type TaskUpdateWithWhereUniqueWithoutCategoryInput = {
  data: TaskUpdateWithoutCategoryInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prompts?: InputMaybe<PromptUpdateManyWithoutTaskNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TaskUpdatetagsInput>;
  tips?: InputMaybe<TipUpdateManyWithoutTaskNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutPromptsInput = {
  category?: InputMaybe<CategoryUpdateOneWithoutTasksNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TaskUpdatetagsInput>;
  tips?: InputMaybe<TipUpdateManyWithoutTaskNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutTipsInput = {
  category?: InputMaybe<CategoryUpdateOneWithoutTasksNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imoji?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prompts?: InputMaybe<PromptUpdateManyWithoutTaskNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TaskUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdatetagsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TaskUpsertWithWhereUniqueWithoutCategoryInput = {
  create: TaskCreateWithoutCategoryInput;
  update: TaskUpdateWithoutCategoryInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithoutPromptsInput = {
  create: TaskCreateWithoutPromptsInput;
  update: TaskUpdateWithoutPromptsInput;
};

export type TaskUpsertWithoutTipsInput = {
  create: TaskCreateWithoutTipsInput;
  update: TaskUpdateWithoutTipsInput;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imoji?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  prompts?: InputMaybe<PromptListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  tips?: InputMaybe<TipListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Tip = {
  __typename?: 'Tip';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  task?: Maybe<Task>;
  taskId: Scalars['String']['output'];
};

export type TipCountAggregate = {
  __typename?: 'TipCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
};

export type TipCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TipCreateInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<TaskCreateNestedOneWithoutTipsInput>;
};

export type TipCreateManyInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  taskId: Scalars['String']['input'];
};

export type TipCreateManyTaskInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TipCreateManyTaskInputEnvelope = {
  data: Array<TipCreateManyTaskInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TipCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<TipWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TipCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<TipCreateWithoutTaskInput>>;
  createMany?: InputMaybe<TipCreateManyTaskInputEnvelope>;
};

export type TipCreateOrConnectWithoutTaskInput = {
  create: TipCreateWithoutTaskInput;
  where: TipWhereUniqueInput;
};

export type TipCreateWithoutTaskInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TipGroupBy = {
  __typename?: 'TipGroupBy';
  _count?: Maybe<TipCountAggregate>;
  _max?: Maybe<TipMaxAggregate>;
  _min?: Maybe<TipMinAggregate>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  taskId: Scalars['String']['output'];
};

export type TipListRelationFilter = {
  every?: InputMaybe<TipWhereInput>;
  none?: InputMaybe<TipWhereInput>;
  some?: InputMaybe<TipWhereInput>;
};

export type TipMaxAggregate = {
  __typename?: 'TipMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
};

export type TipMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TipMinAggregate = {
  __typename?: 'TipMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
};

export type TipMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TipOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TipOrderByWithAggregationInput = {
  _count?: InputMaybe<TipCountOrderByAggregateInput>;
  _max?: InputMaybe<TipMaxOrderByAggregateInput>;
  _min?: InputMaybe<TipMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TipOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrder>;
};

export enum TipScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  TaskId = 'taskId'
}

export type TipScalarWhereInput = {
  AND?: InputMaybe<Array<TipScalarWhereInput>>;
  NOT?: InputMaybe<Array<TipScalarWhereInput>>;
  OR?: InputMaybe<Array<TipScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  taskId?: InputMaybe<StringFilter>;
};

export type TipScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TipScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TipScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TipScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  taskId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TipUpdateInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutTipsNestedInput>;
};

export type TipUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TipUpdateManyWithWhereWithoutTaskInput = {
  data: TipUpdateManyMutationInput;
  where: TipScalarWhereInput;
};

export type TipUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<TipWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TipCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<TipCreateWithoutTaskInput>>;
  createMany?: InputMaybe<TipCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<TipWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TipScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TipWhereUniqueInput>>;
  set?: InputMaybe<Array<TipWhereUniqueInput>>;
  update?: InputMaybe<Array<TipUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<TipUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<TipUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type TipUpdateWithWhereUniqueWithoutTaskInput = {
  data: TipUpdateWithoutTaskInput;
  where: TipWhereUniqueInput;
};

export type TipUpdateWithoutTaskInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TipUpsertWithWhereUniqueWithoutTaskInput = {
  create: TipCreateWithoutTaskInput;
  update: TipUpdateWithoutTaskInput;
  where: TipWhereUniqueInput;
};

export type TipWhereInput = {
  AND?: InputMaybe<Array<TipWhereInput>>;
  NOT?: InputMaybe<Array<TipWhereInput>>;
  OR?: InputMaybe<Array<TipWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<StringFilter>;
};

export type TipWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  avater?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nurgePlus: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  purchasedAddons: Array<Addon>;
  purchasedCategories: Array<Category>;
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserPurchasedAddonsArgs = {
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddonWhereInput>;
};


export type UserPurchasedCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  purchasedAddons: Scalars['Int']['output'];
  purchasedCategories: Scalars['Int']['output'];
};


export type UserCountPurchasedAddonsArgs = {
  where?: InputMaybe<AddonWhereInput>;
};


export type UserCountPurchasedCategoriesArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avater: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  nurgePlus: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nurgePlus?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nurgePlus?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  purchasedAddons?: InputMaybe<AddonCreateNestedManyWithoutPurchasedByUsersInput>;
  purchasedCategories?: InputMaybe<CategoryCreateNestedManyWithoutPurchasedByUsersInput>;
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nurgePlus?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedManyWithoutPurchasedAddonsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPurchasedAddonsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPurchasedAddonsInput>>;
};

export type UserCreateNestedManyWithoutPurchasedCategoriesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPurchasedCategoriesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPurchasedCategoriesInput>>;
};

export type UserCreateOrConnectWithoutPurchasedAddonsInput = {
  create: UserCreateWithoutPurchasedAddonsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPurchasedCategoriesInput = {
  create: UserCreateWithoutPurchasedCategoriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPurchasedAddonsInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nurgePlus?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  purchasedCategories?: InputMaybe<CategoryCreateNestedManyWithoutPurchasedByUsersInput>;
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutPurchasedCategoriesInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nurgePlus?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  purchasedAddons?: InputMaybe<AddonCreateNestedManyWithoutPurchasedByUsersInput>;
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  avater?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nurgePlus: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nurgePlus?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nurgePlus?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nurgePlus?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nurgePlus?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avater?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nurgePlus?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avater?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nurgePlus?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  purchasedAddons?: InputMaybe<AddonOrderByRelationAggregateInput>;
  purchasedCategories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserRole {
  Admin = 'admin',
  Public = 'public',
  Superadmin = 'superadmin'
}

export enum UserScalarFieldEnum {
  Avater = 'avater',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  NurgePlus = 'nurgePlus',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  avater?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nurgePlus?: InputMaybe<BoolFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avater?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  nurgePlus?: InputMaybe<BoolWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumUserRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nurgePlus?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchasedAddons?: InputMaybe<AddonUpdateManyWithoutPurchasedByUsersNestedInput>;
  purchasedCategories?: InputMaybe<CategoryUpdateManyWithoutPurchasedByUsersNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nurgePlus?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutPurchasedAddonsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutPurchasedCategoriesInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutPurchasedAddonsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPurchasedAddonsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPurchasedAddonsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutPurchasedAddonsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutPurchasedAddonsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutPurchasedAddonsInput>>;
};

export type UserUpdateManyWithoutPurchasedCategoriesNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPurchasedCategoriesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPurchasedCategoriesInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutPurchasedCategoriesInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutPurchasedCategoriesInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutPurchasedCategoriesInput>>;
};

export type UserUpdateWithWhereUniqueWithoutPurchasedAddonsInput = {
  data: UserUpdateWithoutPurchasedAddonsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutPurchasedCategoriesInput = {
  data: UserUpdateWithoutPurchasedCategoriesInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutPurchasedAddonsInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nurgePlus?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchasedCategories?: InputMaybe<CategoryUpdateManyWithoutPurchasedByUsersNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPurchasedCategoriesInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nurgePlus?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchasedAddons?: InputMaybe<AddonUpdateManyWithoutPurchasedByUsersNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutPurchasedAddonsInput = {
  create: UserCreateWithoutPurchasedAddonsInput;
  update: UserUpdateWithoutPurchasedAddonsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutPurchasedCategoriesInput = {
  create: UserCreateWithoutPurchasedCategoriesInput;
  update: UserUpdateWithoutPurchasedCategoriesInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avater?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nurgePlus?: InputMaybe<BoolFilter>;
  password?: InputMaybe<StringFilter>;
  purchasedAddons?: InputMaybe<AddonListRelationFilter>;
  purchasedCategories?: InputMaybe<CategoryListRelationFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DefaultResponsce = {
  __typename?: 'defaultResponsce';
  message: Scalars['String']['output'];
};

export type FileUploadResponsce = {
  __typename?: 'fileUploadResponsce';
  file: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type GetUserAddonsQueryVariables = Exact<{
  where?: InputMaybe<AddonWhereInput>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput> | AddonOrderByWithRelationInput>;
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum> | AddonScalarFieldEnum>;
}>;


export type GetUserAddonsQuery = { __typename?: 'Query', getUserAddons: Array<{ __typename?: 'Addon', id: string, img: string, name: string, createdAt: any, purchaseUrl?: string | null, imoji?: string | null }> };

export type GetUserNotPurchasedAddonsQueryVariables = Exact<{
  where?: InputMaybe<AddonWhereInput>;
  orderBy?: InputMaybe<Array<AddonOrderByWithRelationInput> | AddonOrderByWithRelationInput>;
  cursor?: InputMaybe<AddonWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<AddonScalarFieldEnum> | AddonScalarFieldEnum>;
}>;


export type GetUserNotPurchasedAddonsQuery = { __typename?: 'Query', getUserNotPurchasedAddons: Array<{ __typename?: 'Addon', createdAt: any, id: string, img: string, name: string, purchaseUrl?: string | null, imoji?: string | null }> };

export type GetUserPurchasedSingleAddonQueryVariables = Exact<{
  where: AddonWhereUniqueInput;
  addonBlogCategoryWhere2?: InputMaybe<AddonBlogCategoryWhereInput>;
  orderBy?: InputMaybe<Array<AddonBlogCategoryOrderByWithRelationInput> | AddonBlogCategoryOrderByWithRelationInput>;
  cursor?: InputMaybe<AddonBlogCategoryWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<AddonBlogCategoryScalarFieldEnum> | AddonBlogCategoryScalarFieldEnum>;
  blogWhere2?: InputMaybe<BlogWhereInput>;
  blogOrderBy2?: InputMaybe<Array<BlogOrderByWithRelationInput> | BlogOrderByWithRelationInput>;
  blogCursor2?: InputMaybe<BlogWhereUniqueInput>;
  blogTake2?: InputMaybe<Scalars['Int']['input']>;
  blogSkip2?: InputMaybe<Scalars['Int']['input']>;
  blogDistinct2?: InputMaybe<Array<BlogScalarFieldEnum> | BlogScalarFieldEnum>;
}>;


export type GetUserPurchasedSingleAddonQuery = { __typename?: 'Query', getUserPurchasedSingleAddon: { __typename?: 'Addon', updatedAt: any, name: string, imoji?: string | null, img: string, id: string, description?: string | null, createdAt: any, addonBlogCategory: Array<{ __typename?: 'AddonBlogCategory', createdAt: any, id: string, name: string, updatedAt: any, _count?: { __typename?: 'AddonBlogCategoryCount', blog: number } | null, blog: Array<{ __typename?: 'Blog', id: string, imoji: string, title: string, createdAt: any, updatedAt: any }> }>, _count?: { __typename?: 'AddonCount', addonBlogCategory: number, blog: number } | null } };

export type GetUserBlogSingleQueryVariables = Exact<{
  where: BlogWhereUniqueInput;
}>;


export type GetUserBlogSingleQuery = { __typename?: 'Query', getUserBlogSingle: { __typename?: 'Blog', description: string, id: string, imoji: string, title: string, createdAt: any, addonId: string, addonBlogCategory?: { __typename?: 'AddonBlogCategory', id: string, name: string } | null } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', getUserCategories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: any }> };

export type GetUserProductsQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput>;
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum> | ProductScalarFieldEnum>;
}>;


export type GetUserProductsQuery = { __typename?: 'Query', getUserProducts: Array<{ __typename?: 'Product', createdAt: any, description: string, id: string, image: string, moneyBackGuarantee: number, name: string, slug: string, taskAutomateCount: number, topTierPromptCount: number, category?: { __typename?: 'Category', name: string, id: string } | null }> };

export type TasksWithoutrelationalDataQueryVariables = Exact<{
  where?: InputMaybe<TaskWhereInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput> | TaskOrderByWithRelationInput>;
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum> | TaskScalarFieldEnum>;
}>;


export type TasksWithoutrelationalDataQuery = { __typename?: 'Query', getUserTasks: Array<{ __typename?: 'Task', tags: Array<string>, slug: string, name: string, imoji: string, id: string, description: string }> };

export type AggregateTaskQueryVariables = Exact<{
  where?: InputMaybe<TaskWhereInput>;
  cursor?: InputMaybe<TaskWhereUniqueInput>;
}>;


export type AggregateTaskQuery = { __typename?: 'Query', aggregateTask: { __typename?: 'AggregateTask', _count?: { __typename?: 'TaskCountAggregate', _all: number } | null } };

export type TaskQueryVariables = Exact<{
  where: TaskWhereUniqueInput;
}>;


export type TaskQuery = { __typename?: 'Query', task?: { __typename?: 'Task', slug: string, tags: Array<string>, description: string, createdAt: any, id: string, imoji: string, name: string, updatedAt: any, categoryId: string, prompts: Array<{ __typename?: 'Prompt', description: string, id: string, name: string }>, tips: Array<{ __typename?: 'Tip', id: string, description: string }>, category?: { __typename?: 'Category', name: string } | null } | null };

export type RegisterMutationVariables = Exact<{
  input: CreateOneUserArgsCustom;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'defaultResponsce', message: string } | null };

export type LoginMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponsce', accessToken?: string | null, isAuthenticated: boolean, message: string, success: boolean, user?: { __typename?: 'User', avater?: string | null, email: string, id: string, name: string, password: string, role: UserRole } | null } | null };


export const GetUserAddonsDocument = gql`
    query GetUserAddons($where: AddonWhereInput, $orderBy: [AddonOrderByWithRelationInput!], $cursor: AddonWhereUniqueInput, $take: Int, $skip: Int, $distinct: [AddonScalarFieldEnum!]) {
  getUserAddons(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    img
    name
    createdAt
    purchaseUrl
    imoji
  }
}
    `;

/**
 * __useGetUserAddonsQuery__
 *
 * To run a query within a React component, call `useGetUserAddonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAddonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAddonsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useGetUserAddonsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserAddonsQuery, GetUserAddonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserAddonsQuery, GetUserAddonsQueryVariables>(GetUserAddonsDocument, options);
      }
export function useGetUserAddonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserAddonsQuery, GetUserAddonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserAddonsQuery, GetUserAddonsQueryVariables>(GetUserAddonsDocument, options);
        }
export type GetUserAddonsQueryHookResult = ReturnType<typeof useGetUserAddonsQuery>;
export type GetUserAddonsLazyQueryHookResult = ReturnType<typeof useGetUserAddonsLazyQuery>;
export type GetUserAddonsQueryResult = Apollo.QueryResult<GetUserAddonsQuery, GetUserAddonsQueryVariables>;
export const GetUserNotPurchasedAddonsDocument = gql`
    query GetUserNotPurchasedAddons($where: AddonWhereInput, $orderBy: [AddonOrderByWithRelationInput!], $cursor: AddonWhereUniqueInput, $take: Int, $skip: Int, $distinct: [AddonScalarFieldEnum!]) {
  getUserNotPurchasedAddons(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    createdAt
    id
    img
    name
    purchaseUrl
    imoji
  }
}
    `;

/**
 * __useGetUserNotPurchasedAddonsQuery__
 *
 * To run a query within a React component, call `useGetUserNotPurchasedAddonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserNotPurchasedAddonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserNotPurchasedAddonsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useGetUserNotPurchasedAddonsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserNotPurchasedAddonsQuery, GetUserNotPurchasedAddonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserNotPurchasedAddonsQuery, GetUserNotPurchasedAddonsQueryVariables>(GetUserNotPurchasedAddonsDocument, options);
      }
export function useGetUserNotPurchasedAddonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserNotPurchasedAddonsQuery, GetUserNotPurchasedAddonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserNotPurchasedAddonsQuery, GetUserNotPurchasedAddonsQueryVariables>(GetUserNotPurchasedAddonsDocument, options);
        }
export type GetUserNotPurchasedAddonsQueryHookResult = ReturnType<typeof useGetUserNotPurchasedAddonsQuery>;
export type GetUserNotPurchasedAddonsLazyQueryHookResult = ReturnType<typeof useGetUserNotPurchasedAddonsLazyQuery>;
export type GetUserNotPurchasedAddonsQueryResult = Apollo.QueryResult<GetUserNotPurchasedAddonsQuery, GetUserNotPurchasedAddonsQueryVariables>;
export const GetUserPurchasedSingleAddonDocument = gql`
    query GetUserPurchasedSingleAddon($where: AddonWhereUniqueInput!, $addonBlogCategoryWhere2: AddonBlogCategoryWhereInput, $orderBy: [AddonBlogCategoryOrderByWithRelationInput!], $cursor: AddonBlogCategoryWhereUniqueInput, $take: Int, $skip: Int, $distinct: [AddonBlogCategoryScalarFieldEnum!], $blogWhere2: BlogWhereInput, $blogOrderBy2: [BlogOrderByWithRelationInput!], $blogCursor2: BlogWhereUniqueInput, $blogTake2: Int, $blogSkip2: Int, $blogDistinct2: [BlogScalarFieldEnum!]) {
  getUserPurchasedSingleAddon(where: $where) {
    updatedAt
    name
    imoji
    img
    id
    description
    createdAt
    addonBlogCategory(
      where: $addonBlogCategoryWhere2
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      _count {
        blog
      }
      blog(
        where: $blogWhere2
        orderBy: $blogOrderBy2
        cursor: $blogCursor2
        take: $blogTake2
        skip: $blogSkip2
        distinct: $blogDistinct2
      ) {
        id
        imoji
        title
        createdAt
        updatedAt
      }
      createdAt
      id
      name
      updatedAt
    }
    _count {
      addonBlogCategory
      blog
    }
  }
}
    `;

/**
 * __useGetUserPurchasedSingleAddonQuery__
 *
 * To run a query within a React component, call `useGetUserPurchasedSingleAddonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPurchasedSingleAddonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPurchasedSingleAddonQuery({
 *   variables: {
 *      where: // value for 'where'
 *      addonBlogCategoryWhere2: // value for 'addonBlogCategoryWhere2'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *      blogWhere2: // value for 'blogWhere2'
 *      blogOrderBy2: // value for 'blogOrderBy2'
 *      blogCursor2: // value for 'blogCursor2'
 *      blogTake2: // value for 'blogTake2'
 *      blogSkip2: // value for 'blogSkip2'
 *      blogDistinct2: // value for 'blogDistinct2'
 *   },
 * });
 */
export function useGetUserPurchasedSingleAddonQuery(baseOptions: Apollo.QueryHookOptions<GetUserPurchasedSingleAddonQuery, GetUserPurchasedSingleAddonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPurchasedSingleAddonQuery, GetUserPurchasedSingleAddonQueryVariables>(GetUserPurchasedSingleAddonDocument, options);
      }
export function useGetUserPurchasedSingleAddonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPurchasedSingleAddonQuery, GetUserPurchasedSingleAddonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPurchasedSingleAddonQuery, GetUserPurchasedSingleAddonQueryVariables>(GetUserPurchasedSingleAddonDocument, options);
        }
export type GetUserPurchasedSingleAddonQueryHookResult = ReturnType<typeof useGetUserPurchasedSingleAddonQuery>;
export type GetUserPurchasedSingleAddonLazyQueryHookResult = ReturnType<typeof useGetUserPurchasedSingleAddonLazyQuery>;
export type GetUserPurchasedSingleAddonQueryResult = Apollo.QueryResult<GetUserPurchasedSingleAddonQuery, GetUserPurchasedSingleAddonQueryVariables>;
export const GetUserBlogSingleDocument = gql`
    query GetUserBlogSingle($where: BlogWhereUniqueInput!) {
  getUserBlogSingle(where: $where) {
    addonBlogCategory {
      id
      name
    }
    description
    id
    imoji
    title
    createdAt
    addonId
  }
}
    `;

/**
 * __useGetUserBlogSingleQuery__
 *
 * To run a query within a React component, call `useGetUserBlogSingleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBlogSingleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBlogSingleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserBlogSingleQuery(baseOptions: Apollo.QueryHookOptions<GetUserBlogSingleQuery, GetUserBlogSingleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBlogSingleQuery, GetUserBlogSingleQueryVariables>(GetUserBlogSingleDocument, options);
      }
export function useGetUserBlogSingleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBlogSingleQuery, GetUserBlogSingleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBlogSingleQuery, GetUserBlogSingleQueryVariables>(GetUserBlogSingleDocument, options);
        }
export type GetUserBlogSingleQueryHookResult = ReturnType<typeof useGetUserBlogSingleQuery>;
export type GetUserBlogSingleLazyQueryHookResult = ReturnType<typeof useGetUserBlogSingleLazyQuery>;
export type GetUserBlogSingleQueryResult = Apollo.QueryResult<GetUserBlogSingleQuery, GetUserBlogSingleQueryVariables>;
export const CategoriesDocument = gql`
    query Categories {
  getUserCategories {
    id
    name
    createdAt
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const GetUserProductsDocument = gql`
    query GetUserProducts($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $cursor: ProductWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ProductScalarFieldEnum!]) {
  getUserProducts(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    category {
      name
      id
    }
    createdAt
    description
    id
    image
    moneyBackGuarantee
    name
    slug
    taskAutomateCount
    topTierPromptCount
  }
}
    `;

/**
 * __useGetUserProductsQuery__
 *
 * To run a query within a React component, call `useGetUserProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useGetUserProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserProductsQuery, GetUserProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProductsQuery, GetUserProductsQueryVariables>(GetUserProductsDocument, options);
      }
export function useGetUserProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProductsQuery, GetUserProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProductsQuery, GetUserProductsQueryVariables>(GetUserProductsDocument, options);
        }
export type GetUserProductsQueryHookResult = ReturnType<typeof useGetUserProductsQuery>;
export type GetUserProductsLazyQueryHookResult = ReturnType<typeof useGetUserProductsLazyQuery>;
export type GetUserProductsQueryResult = Apollo.QueryResult<GetUserProductsQuery, GetUserProductsQueryVariables>;
export const TasksWithoutrelationalDataDocument = gql`
    query tasksWithoutrelationalData($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!], $cursor: TaskWhereUniqueInput, $take: Int, $skip: Int, $distinct: [TaskScalarFieldEnum!]) {
  getUserTasks(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    tags
    slug
    name
    imoji
    id
    description
  }
}
    `;

/**
 * __useTasksWithoutrelationalDataQuery__
 *
 * To run a query within a React component, call `useTasksWithoutrelationalDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksWithoutrelationalDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksWithoutrelationalDataQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useTasksWithoutrelationalDataQuery(baseOptions?: Apollo.QueryHookOptions<TasksWithoutrelationalDataQuery, TasksWithoutrelationalDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksWithoutrelationalDataQuery, TasksWithoutrelationalDataQueryVariables>(TasksWithoutrelationalDataDocument, options);
      }
export function useTasksWithoutrelationalDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksWithoutrelationalDataQuery, TasksWithoutrelationalDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksWithoutrelationalDataQuery, TasksWithoutrelationalDataQueryVariables>(TasksWithoutrelationalDataDocument, options);
        }
export type TasksWithoutrelationalDataQueryHookResult = ReturnType<typeof useTasksWithoutrelationalDataQuery>;
export type TasksWithoutrelationalDataLazyQueryHookResult = ReturnType<typeof useTasksWithoutrelationalDataLazyQuery>;
export type TasksWithoutrelationalDataQueryResult = Apollo.QueryResult<TasksWithoutrelationalDataQuery, TasksWithoutrelationalDataQueryVariables>;
export const AggregateTaskDocument = gql`
    query AggregateTask($where: TaskWhereInput, $cursor: TaskWhereUniqueInput) {
  aggregateTask(where: $where, cursor: $cursor) {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useAggregateTaskQuery__
 *
 * To run a query within a React component, call `useAggregateTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateTaskQuery({
 *   variables: {
 *      where: // value for 'where'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useAggregateTaskQuery(baseOptions?: Apollo.QueryHookOptions<AggregateTaskQuery, AggregateTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AggregateTaskQuery, AggregateTaskQueryVariables>(AggregateTaskDocument, options);
      }
export function useAggregateTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AggregateTaskQuery, AggregateTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AggregateTaskQuery, AggregateTaskQueryVariables>(AggregateTaskDocument, options);
        }
export type AggregateTaskQueryHookResult = ReturnType<typeof useAggregateTaskQuery>;
export type AggregateTaskLazyQueryHookResult = ReturnType<typeof useAggregateTaskLazyQuery>;
export type AggregateTaskQueryResult = Apollo.QueryResult<AggregateTaskQuery, AggregateTaskQueryVariables>;
export const TaskDocument = gql`
    query Task($where: TaskWhereUniqueInput!) {
  task(where: $where) {
    slug
    tags
    description
    createdAt
    id
    imoji
    name
    updatedAt
    categoryId
    prompts {
      description
      id
      name
    }
    tips {
      id
      description
    }
    category {
      name
    }
  }
}
    `;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: CreateOneUserArgsCustom!) {
  register(input: $input) {
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    accessToken
    isAuthenticated
    message
    success
    user {
      avater
      email
      id
      name
      password
      role
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;