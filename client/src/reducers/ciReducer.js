const initialState = {
  state: {
    tpi_rcName: "",
    tpi_aaSolution: "CCBILL",
    tpi_ntc: "Pending",
    tpi_vtSector: "Pending",
    tpi_date: "Pending",
    tpi_brPartner: "Pending",
    tpi_aBdmOwner: "Pending",
    tpi_ccLocation: "Pending",
    tpi_EEADocuments: "Pending",
    tpi_TLoAR: "Pending",
    mci_crAddress: "Pending",
    mci_crNumber: "Pending",
    mci_ctAddress: "Pending",
    mci_vtSector: "Pending",
    cci_cName: "Pending",
    cci_skypeAddress: "Pending",
    cci_mNumber: "Pending",
    cci_lNumber: "Pending",
    cci_otpMNumber: "Pending",
    tci_crAddress: "Pending",
    tci_crNumber: "Pending",
    tci_ctAddress: "Pending",
    tci_wUrl: "Pending",
    cci_2_cName: "Pending",
    cci_2_Position: "Pending",
    cci_2_mNumber: "Pending",
    cci_2_lNumber: "Pending",
    cci_2_otpMNumber: "Pending",
    cci_2_skypeAddress: "Pending",
  },

  isLoading: true,
  // tpi_rcName: "hahah",
  // tpi_aaSolution: "Pending",
  // tpi_ntc: "Pending",
  // tpi_vtSector: "Pending",
  // tpi_date: "Pending",
  // tpi_brPartner: "Pending",
  // tpi_aBdmOwner: "Pending",
  // tpi_ccLocation: "Pending",
  // tpi_EEADocuments: "Pending",
  // tpi_TLoAR: "Pending",
  // mci_crAddress: "Pending",
  // mci_crNumber: "Pending",
  // mci_ctAddress: "Pending",
  // mci_vtSector: "Pending",
  // cci_cName: "Pending",
  // cci_skypeAddress: "Pending",
  // cci_mNumber: "Pending",
  // cci_lNumber: "Pending",
  // cci_otpMNumber: "Pending",
  // tci_crAddress: "Pending",
  // tci_crNumber: "Pending",
  // tci_ctAddress: "Pending",
  // tci_wUrl: "Pending",
  // cci_2_cName: "Pending",
  // cci_2_Position: "Pending",
  // cci_2_mNumber: "Pending",
  // cci_2_lNumber: "Pending",
  // cci_2_otpMNumber: "Pending",
  // cci_2_skypeAddress: "Pending",
};
export const ciReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CI":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "GET_CI":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "Update_CI":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
