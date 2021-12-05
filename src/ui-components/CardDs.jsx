/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Card } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardD from "./CardD";
import { Collection } from "@aws-amplify/ui-react";
export default function CardDs(props) {
  const { card, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Card,
        }).items;
  return (
    <Collection
      templateColumns="1fr 1fr 1fr"
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
          card={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardD[0]")}
        ></CardD>
      )}
    </Collection>
  );
}
