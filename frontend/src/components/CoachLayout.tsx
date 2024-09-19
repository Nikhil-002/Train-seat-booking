export const CoachLayout = ({ seatMap }: any) => {
//   seatMap.map((seat)=>{
//   Check if the seat is booked or not
//   const isBooked = seat.booked;

//   Conditionally set CSS classes based on booking status
//   const seatColorClass = isBooked ? 'bg-green-500' : 'bg-green-500';

//   })
  return (
    <div className="flex justify-center">
      <div className=" pt-10 flex flex-col justify-center">
        <div className="p-6 grid grid-cols-8 gap-1.5 max-w-lg bg-blue-300 rounded-3xl border-4 border-black">
          <div
            key={1}
            className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer"
          >
            1
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            2
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            3
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            4
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            5
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            6
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            7
          </div>

          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            8
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            9
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            10
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            11
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            12
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            13
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            14
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            15
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            16
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            17
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            18
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            19
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            20
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            21
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            22
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            23
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            24
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            25
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            26
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            27
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            28
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            29
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            30
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            31
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            32
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            33
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            34
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            35
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            36
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            37
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            38
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            39
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            40
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            41
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            42
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            43
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            44
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            45
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            46
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            47
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            48
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            49
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            50
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            51
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            52
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            53
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            54
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            55
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            56
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            57
          </div>
          <div className="bg-red-400 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            58
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            59
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            60
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            61
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            62
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            63
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            64
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            65
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            66
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            67
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            68
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            69
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            70
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            71
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            72
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            73
          </div>
          <div className="col-start-4 col-span-1"></div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            74
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            75
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            76
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            77
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            78
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            79
          </div>
          <div className="bg-green-500 text-center p-2 rounded-md border border-2 border-black cursor-pointer">
            80
          </div>
        </div>
      </div>
    </div>
  );
};
