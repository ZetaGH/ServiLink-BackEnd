class ContractController {
    contract(req, res, next) {
        return res.status(201).json({
            message: 'list of contract'
        })
    }
    contractById(req, res, next) {
        return res.status(201).json({
            message: 'contract by id'
        })
    }
    editContractById(req, res, next) {
        return res.status(201).json({
            message: 'edit contract by id'
        })
    }
}
export default new ContractController()