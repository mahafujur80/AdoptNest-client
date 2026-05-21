"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteMyListingDialog({pet}) {
      const router = useRouter()

     const handleDelete = async()=>{
      const {data:tokenData} = await authClient.token()
      
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${pet?._id}`,{
            method: 'DELETE',
            headers:{ authorization: `Bearer ${tokenData.token}`}
        })
        const data = await res.json()
        
        if(data.deletedCount === 1){
            toast.success('Delete Success')
            router.refresh()
        }
        if(data.deletedCount < 1){
            toast.error('Delete Fail')
            return
        }
    }

  return (
    <AlertDialog>
      <Button className='w-full  rounded-lg text-sm font-semibold text-danger' variant="outline">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete your pet permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This pet will permanently delete <strong>{pet?.petName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep pet
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}