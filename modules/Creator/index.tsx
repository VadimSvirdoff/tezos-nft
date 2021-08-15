import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';
import CreatorDisplay from './CreatorDisplay';
import { useSelector, useDispatch } from 'rtk';
import {
  getMarketplaceNftsQuery
} from 'rtk/async/queries';
import { Collection } from 'rtk/slices/collections';

export function Creator() {
  const router = useRouter();
  const { minter } = router.query;
  const system = useSelector(s => s.system);
  const collections = useSelector(s => s.collections);
  const { marketplace } = useSelector(s => s.marketplace);
  const dispatch = useDispatch();

  // Don't get assets from other contracts for now
  // useEffect(() => {
  //     dispatch(getAssetContractsQuery(minter));
  // }, [system.status, dispatch, minter, collections.globalCollection]);

  useEffect(() => {
    dispatch(getMarketplaceNftsQuery(marketplace.address));
  }, [marketplace.address, dispatch]);

  const creatorsCollections = {} as { [key: string]: Collection };

  if (!!marketplace.tokens) {
    marketplace.tokens
      .filter(
        token =>
          token?.token?.owner === (minter ?? system.tzPublicKey)
      )
      .map(token => {
        creatorsCollections[token?.tokenSale?.value?.sale_data?.sale_token?.fa2_address] = collections.collections[token?.tokenSale?.value?.sale_data?.sale_token?.fa2_address];
        return null;
      });
  }
  Object.keys(collections.collections)
    .filter(
      key =>
        collections.collections[key].creator.address ===
        (minter ?? system.tzPublicKey)
    )
    .map(addr => {
      creatorsCollections[addr] = collections.collections[addr];
      return null;
    });

  return typeof minter === "string"
    ? (
      <Flex
        flex="1"
        w="100%"
        minHeight="0"
        flexDir={{
          base: 'column',
          md: 'row'
        }}
      >
        <CreatorDisplay minter={minter} collections={creatorsCollections} />
      </Flex>
    )
    : null;
}
