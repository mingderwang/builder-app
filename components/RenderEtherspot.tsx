import {
    Etherspot
  } from "@etherspot/react-transaction-buidler";

import type EtherspotProps from "@etherspot/react-transaction-buidler"; 
  /**
   * This is all that is needed to get started.
   * To customise this, see the possible props
   * you can pass in. the docs.
   */
  function RenderEtherspot(props: EtherspotProps) {
    return <Etherspot />;
  }

  export default RenderEtherspot;
