package golang_test

import (
	"reflect"
	"testing"

	"github.com/sherhonbeknuraliyev/top-interview-150/golang"
)






func TestRemoveDuplicates(t *testing.T) {

	nums := []int{1,1,2}


	k := golang.RemoveDuplicates(nums)

	if k != 2 {
		t.Fail()
	}

	if !reflect.DeepEqual(nums, []int {1,2,2}) {
		t.Fail()
	}
}