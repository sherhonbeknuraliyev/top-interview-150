package golang_test

import (
	"fmt"
	"reflect"
	"testing"

	"github.com/sherhonbeknuraliyev/top-interview-150/golang"
)






func TestMergeSortedArray(t *testing.T) {

	nums1 := []int{1,2,3,0,0,0}
	nums2 := []int{2,5,6}
	golang.Merge(nums1,3, nums2, 3)

	fmt.Println(nums1)

	if !reflect.DeepEqual(nums1, []int{1,2,2,3,5,6}) {
		t.Fail()
	}
}