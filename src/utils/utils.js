
export const roleWorkoutBuilder = (role) => {

   let res

    switch (role) {

        case "SELLER":
            res = "Продавец"
            break

        case "INSTALLER":
            res = "Монтажник"
            break

        default:
            res = "Покупатель"
    }

    return res
}