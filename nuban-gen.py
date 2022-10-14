from random import randrange
#   * Set attributes on generate method
#   * @param { String} bank unique code
#   * @param {String} nuban


class NJbank:
    def __init__(self):
        self.digits = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3]
        self.accountNumber = 0
        self.ofiUniqueCode = "941"
        self.nuban = 0
        self._checksum = ""

    def getAccountNumber(self, nuban):
        self.ofiUniqueCode = self.ofiUniqueCode
        self.nuban = nuban
        #  CHECK FOR ERRORS

        if(len(self.ofiUniqueCode) != 3):
            raise Exception("OFI unique code must be of length 3 and must be a string")

        if(len(self.nuban) != 9):
            raise Exception("Nuban Number must be of length 9 and must be a string")

        self._checksum = self.checkSum()
        self.accountNumber = self.nuban+self._checksum
        return self.accountNumber

    def checkSum(self):
        # The check digits algorithm
        # STEP 1.
        self.accountNumber = self.ofiUniqueCode+self.nuban
        self.accountNumber = list(self.accountNumber)
        total = 0
        modulo = 0

        for x in range(len(self.accountNumber)):
        
            total += int(self.accountNumber[x])*self.digits[x]
        # print(total)



        # STEP 2.
        modulo = (total % 10)
        self._checksum = str(10 - modulo)
        if(self._checksum == 10):
            self._checksum = 0
        else:
            self._checksum = self._checksum

        # SETP 3
        return self._checksum


if __name__ == "__main__":

    def nubanNumberGenerate():
        nubanNumber = randrange(100000000,900000000)
        return str(nubanNumber)

    NJbankNumber = NJbank()
    count = 0
    while count <= 10:

        print(NJbankNumber.getAccountNumber(nubanNumberGenerate()))
        count +=1
        # print(NJbankNumber.generate("950547"))

    # #  BANK UNIQUE CODES..
    ofiUniqueCodes = {
        "Rosabon_financial": "940091"
    }