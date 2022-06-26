const { express_1 } = require("./app")

express_1.listen(process.env.PORT || 80, () =>
{
    console.log(process.env.PORT)
})