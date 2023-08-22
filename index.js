export {
	createLink,
} from './create-link.js'
import {
	PEANUT_CONTRACTS,
	CHAIN_DETAILS,
	TOKEN_DETAILS,
	VERSION,
	DEFAULT_CONTRACT_VERSION,
	TOKEN_TYPES,
} from './data.js'
import {
	greeting,
	generateKeysFromString,
	signMessageWithPrivatekey,
	verifySignature,
	solidityHashBytesEIP191,
	solidityHashAddress,
	signAddress,
	getRandomString,
	getLinkFromParams,
	getParamsFromLink,
	getParamsFromPageURL,
	getDepositIdx,
	getDepositIdxs,
} from './util.js'
import  {
	getContract,
	getDefaultProvider,
	getAllDepositsForSigner,
	getLinkStatus,
	getLinkDetails,
	claimLink,
	claimLinkGasless,
	approveSpendERC20,
} from './peanut.js'


const peanut = {
	greeting,
	generateKeysFromString,
	signMessageWithPrivatekey,
	verifySignature,
	solidityHashBytesEIP191,
	solidityHashAddress,
	signAddress,
	getRandomString,
	getContract,
	getDefaultProvider,
	getDepositIdx,
	getDepositIdxs,
	getAllDepositsForSigner,
	getLinkStatus,
	getLinkDetails,
	getParamsFromLink,
	getParamsFromPageURL,
	getLinkFromParams,
	// createLink,
	// createLinks,
	claimLink,
	claimLinkGasless,
	approveSpendERC20,
	// approveSpendERC721,
	// approveSpendERC1155,
	VERSION,
	version: VERSION,
	CHAIN_DETAILS,
	TOKEN_DETAILS,
	TOKEN_TYPES,
	DEFAULT_CONTRACT_VERSION,
	PEANUT_CONTRACTS,
}

export default peanut
export { peanut }
