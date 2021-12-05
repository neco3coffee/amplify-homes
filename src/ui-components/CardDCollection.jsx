/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardD from "./CardD";
import { Collection } from "@aws-amplify/ui-react";
export default function CardDCollection(props) {
  const { home, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
        }).items;
  return (
    <Collection
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      type="grid"
      alignItems="stretch"
      justifyContent="stretch"
      autoFlow="row"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardD
          width="auto"
          margin="0px 0px 0px 0px"
          home={item}
          height="auto"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardD[0]")}
        ></CardD>
      )}
    </Collection>
  );
}
