class DynamicArray {
    int* arr;
    int size;
    int curr_size=0;

   public:
    DynamicArray(int capacity) {
        if (capacity <= 0) {
            // throw error;
        }
        size = capacity;

        arr = new int[size];
    }

    int get(int i) { return *(arr + i); }

    void set(int i, int n) { *(arr + i) = n; }

    void pushback(int n) {
        if ((curr_size ) == size) {
            size = 2 * (size);

            int* copy_arr = new int[size];

            for (int i = 0; i < curr_size; i++) {
                *(copy_arr + i) = *(arr + i);
            }

            delete[] arr;

            arr = copy_arr;

            copy_arr = nullptr;
        }

        *(arr + curr_size) = n;
        (curr_size)++;
    }

    int popback() {
        (curr_size)--;
        int val = *(arr + curr_size);

        return val;
    }

    void resize() { size = size * 2; }

    int getSize() { return curr_size; }

    int getCapacity() { return size; }
};
