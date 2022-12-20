// This file is biniding all the overRides

import Button from "./Button";
import { Badge } from "./Badges";
import { FormField } from "./FormField";
import _ from "lodash";

export default function ComponentsOverrides(theme) {
  return _.merge(Button(theme), Badge(theme), FormField(theme));
}

// ? this function can be use to set more than one type of components

// export function buyerComponentsOverrides(theme) {
//   return merge(BuyerButton(theme), BuyerBadge(theme), BuyerFormField(theme));
// }
