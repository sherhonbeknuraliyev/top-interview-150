package golang


func RemoveDuplicates2(nums []int) int {


	i := 0
	count := 1

	for _, val := range nums {

		if nums[i] != val {
			i += 1
			nums[i] = val
		}else {
			count += 1
			nums[i] = val
		}

	}

	return i + 1
}