class Numberfinder():

    def __init__(self, n, number):
        self.n = n
        self.number = number

    def find_numbers(self):
        number_list = []
        num_string = str(self.number)
        n_string = str(self.n)
        for i in range(len(num_string)):
            if num_string[i] == n_string:
                number_list.append(num_string[i])
            else:
                continue
        return list(map(int, number_list))

