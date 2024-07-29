package golang


func RemoveDuplicates(nums []int) int {


	i := 0

	for _, val := range nums {

		if nums[i] != val {
			i += 1
			nums[i] = val
		}

	}

	return i + 1
}