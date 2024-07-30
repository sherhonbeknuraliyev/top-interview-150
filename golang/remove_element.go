package golang




func RemoveElement(nums []int, val int) int {

    i := 0
    for _, elem := range nums {
        if elem != val {
            nums[i] = elem
            i += 1
        }
    }

    return i
    
}