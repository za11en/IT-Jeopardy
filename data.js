const gameData = {
    "categories": [
        {
            "name": "Binary & Encoding",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The base-2 numeral system that computers use for communication.", "answer": "Binary" },
                        { "clue": "A computer communicates using this base-2 numeral system.", "answer": "Binary" },
                        { "clue": "This system of 1s and 0s is the language of computers.", "answer": "Binary" },
                        { "clue": "A single 1 or 0, it's the most basic unit of binary.", "answer": "A bit" },
                        { "clue": "The most fundamental unit of binary, represented by a 1 or 0.", "answer": "A bit" },
                        { "clue": "Short for 'binary digit', this is the smallest unit of data in a computer.", "answer": "A bit" },
                        { "clue": "A group of 8 bits.", "answer": "A byte" },
                        { "clue": "This term refers to a sequence of 8 bits.", "answer": "A byte" },
                        { "clue": "It takes 8 of these to make one of me.", "answer": "A byte" },
                        { "clue": "The number of possible values that can be represented by one byte.", "answer": "256" },
                        { "clue": "A single byte can represent this many different values.", "answer": "256" },
                        { "clue": "This is the result of 2 to the power of 8.", "answer": "256" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "The decimal value of the binary number 10101010.", "answer": "170" },
                        { "clue": "Convert the binary number 10101010 to its decimal equivalent.", "answer": "170" },
                        { "clue": "If a byte has its 128, 32, 8, and 2 bits turned on, this is its decimal value.", "answer": "170" },
                        { "clue": "This early coding system represents the English alphabet, digits, and punctuation marks.", "answer": "ASCII" },
                        { "clue": "The American Standard Code for Information Interchange is known by this acronym.", "answer": "ASCII" },
                        { "clue": "This character encoding standard is based on the English alphabet.", "answer": "ASCII" },
                        { "clue": "The ASCII code 065 represents this character.", "answer": "A" },
                        { "clue": "In ASCII, the decimal number 65 corresponds to this letter.", "answer": "A" },
                        { "clue": "The first letter of the English alphabet is represented by this decimal number in ASCII.", "answer": "A" },
                        { "clue": "The binary representation of the ASCII character 'A' (decimal 65).", "answer": "01000001" },
                        { "clue": "This 8-bit binary number is equivalent to the decimal value 65.", "answer": "01000001" },
                        { "clue": "The ASCII character 'A' is represented by this sequence of 1s and 0s.", "answer": "01000001" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This newer standard coding system allows for storing a character in more than one byte.", "answer": "UTF-8" },
                        { "clue": "Unicode Transformation Format - 8 bits is also known as this.", "answer": "UTF-8" },
                        { "clue": "This variable-width character encoding is a successor to ASCII.", "answer": "UTF-8" },
                        { "clue": "The decimal value of the binary number 11111111.", "answer": "255" },
                        { "clue": "This is the maximum decimal value that can be represented by an 8-bit binary number.", "answer": "255" },
                        { "clue": "Convert the binary number 11111111 to decimal.", "answer": "255" },
                        { "clue": "In binary, a voltage is denoted as this, while no voltage is a 0.", "answer": "1" },
                        { "clue": "The 'on' state of a transistor is represented by this binary digit.", "answer": "1" },
                        { "clue": "This binary value represents the presence of an electrical signal.", "answer": "1" },
                        { "clue": "The term for assigning binary values to characters so that humans can read them.", "answer": "Character Encoding" },
                        { "clue": "This process assigns binary values to characters for human readability.", "answer": "Character Encoding" },
                        { "clue": "ASCII and UTF-8 are examples of this process.", "answer": "Character Encoding" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "The decimal value of the binary number 00110011.", "answer": "51" },
                        { "clue": "Convert the binary number 00110011 to its decimal equivalent.", "answer": "51" },
                        { "clue": "32 + 16 + 2 + 1 equals this decimal number.", "answer": "51" },
                        { "clue": "A bit is technically short for this two-word term.", "answer": "Binary digit" },
                        { "clue": "The term 'bit' is a portmanteau of these two words.", "answer": "Binary digit" },
                        { "clue": "This two-word phrase is the full name for a bit.", "answer": "Binary digit" },
                        { "clue": "This is the base-2 number for 2^7.", "answer": "128" },
                        { "clue": "The value of the leftmost bit in an 8-bit byte.", "answer": "128" },
                        { "clue": "2 to the power of 7 equals this.", "answer": "128" },
                        { "clue": "The maximum decimal number for a byte, mentioned in the text with a reminder note.", "answer": "255" },
                        { "clue": "While a byte has 256 values, this is the highest number it can represent.", "answer": "255" },
                        { "clue": "The decimal equivalent of a byte with all bits set to 1.", "answer": "255" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "These allow transistors to perform complex tasks, like deciding where to send electrical signals.", "answer": "Logic gates" },
                        { "clue": "These are the building blocks of a digital circuit, performing basic logical functions.", "answer": "Logic gates" },
                        { "clue": "AND, OR, and NOT are fundamental types of these.", "answer": "Logic gates" },
                        { "clue": "The character represented in binary as 01101000, with a decimal value of 104.", "answer": "H" },
                        { "clue": "This letter has a decimal value of 104 in ASCII.", "answer": "H" },
                        { "clue": "The binary number 01101000 represents this ASCII character.", "answer": "H" },
                        { "clue": "A unit of transfer speed, as opposed to a unit of storage like MB.", "answer": "Mb/s" },
                        { "clue": "Megabits per second is represented by this abbreviation.", "answer": "Mb/s" },
                        { "clue": "Internet connection speed is often measured in this unit.", "answer": "Mb/s" },
                        { "clue": "To transfer a 40 MB file in one second, you would need this transfer speed in Mb/s.", "answer": "320 Mb/s" },
                        { "clue": "Since 1 byte is 8 bits, a 40 megabyte file requires this many megabits of transfer speed per second.", "answer": "320 Mb/s" },
                        { "clue": "40 times 8 gives you the required transfer speed in megabits per second for a 40 megabyte file.", "answer": "320 Mb/s" }
                    ]
                }
            ]
        },
        {
            "name": "Computer Components",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "It's known as the 'brain' of the computer, doing all calculations and data processing.", "answer": "CPU" },
                        { "clue": "The Central Processing Unit is commonly known by this acronym.", "answer": "CPU" },
                        { "clue": "This component is the primary data processor of a computer.", "answer": "CPU" },
                        { "clue": "This component holds all of your data, including music, pictures, and applications.", "answer": "Hard Drive" },
                        { "clue": "The long-term storage device in a computer.", "answer": "Hard Drive" },
                        { "clue": "Your operating system, software, and files are stored here.", "answer": "Hard Drive" },
                        { "clue": "The main circuit board that connects all computer components together.", "answer": "Motherboard" },
                        { "clue": "This board is the central hub for all other computer parts.", "answer": "Motherboard" },
                        { "clue": "The CPU, RAM, and expansion cards all plug into this.", "answer": "Motherboard" },
                        { "clue": "This component is the computer's short-term memory.", "answer": "RAM" },
                        { "clue": "Random Access Memory is known by this acronym.", "answer": "RAM" },
                        { "clue": "This volatile memory is used by the computer to store data for currently running applications.", "answer": "RAM" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "This component converts electricity from the wall into a format the computer can use.", "answer": "PSU" },
                        { "clue": "The Power Supply Unit is known by this acronym.", "answer": "PSU" },
                        { "clue": "This provides the necessary power for all the components in a computer.", "answer": "PSU" },
                        { "clue": "Intel, AMD, and Qualcomm are common manufacturers of this component.", "answer": "CPU" },
                        { "clue": "These three companies are major players in the processor market.", "answer": "CPU" },
                        { "clue": "The 'brain' of the computer is often made by one of these manufacturers.", "answer": "CPU" },
                        { "clue": "This type of memory is non-volatile, meaning data isn't lost when the computer is turned off. The BIOS is stored here.", "answer": "ROM" },
                        { "clue": "Read-Only Memory is known by this acronym.", "answer": "ROM" },
                        { "clue": "The firmware that boots up your computer is stored in this type of memory.", "answer": "ROM" },
                        { "clue": "A key motherboard component that manages data between the CPU, RAM, and peripherals, made of a Northbridge and Southbridge.", "answer": "Chipset" },
                        { "clue": "This component on the motherboard directs traffic between other major components.", "answer": "Chipset" },
                        { "clue": "The Northbridge and Southbridge together form this.", "answer": "Chipset" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This type of drive uses a spinning platter and a mechanical arm to read and write information.", "answer": "HDD" },
                        { "clue": "A Hard Disk Drive is known by this acronym.", "answer": "HDD" },
                        { "clue": "This traditional type of hard drive is known for its moving parts.", "answer": "HDD" },
                        { "clue": "This type of drive stores information on microchips and is much faster than an HDD.", "answer": "SSD" },
                        { "clue": "A Solid State Drive is known by this acronym.", "answer": "SSD" },
                        { "clue": "This modern hard drive has no moving parts.", "answer": "SSD" },
                        { "clue": "The speed of an HDD's platter rotation is measured in this unit.", "answer": "RPM" },
                        { "clue": "Revolutions per minute is abbreviated as this.", "answer": "RPM" },
                        { "clue": "A common speed for a consumer hard disk drive is 7200 of these.", "answer": "RPM" },
                        { "clue": "A small microchip that resides within a CPU package.", "answer": "CPU" },
                        { "clue": "The CPU package contains this small processing unit.", "answer": "CPU" },
                        { "clue": "This is another term for the processor itself, inside the larger package.", "answer": "CPU" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "This part of the chipset interconnects RAM and video cards.", "answer": "Northbridge" },
                        { "clue": "This is the 'northern' part of the chipset, handling high-speed components.", "answer": "Northbridge" },
                        { "clue": "The memory controller hub is another name for this part of the chipset.", "answer": "Northbridge" },
                        { "clue": "This part of the chipset maintains I/O controllers for things like hard drives and USB devices.", "answer": "Southbridge" },
                        { "clue": "The 'southern' part of the chipset, handling slower peripherals.", "answer": "Southbridge" },
                        { "clue": "The I/O controller hub is another name for this part of the chipset.", "answer": "Southbridge" },
                        { "clue": "This device is designed to draw heat away from the CPU to improve system efficiency.", "answer": "CPU cooler" },
                        { "clue": "A heatsink and fan combination is a common type of this.", "answer": "CPU cooler" },
                        { "clue": "This is essential for keeping your processor from overheating.", "answer": "CPU cooler" },
                        { "clue": "These are connection points that allow you to connect devices to extend the computer's functionality.", "answer": "Ports" },
                        { "clue": "USB and HDMI are examples of these.", "answer": "Ports" },
                        { "clue": "You plug peripherals into these connections on a computer.", "answer": "Ports" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "This term describes anything you connect to your computer externally that adds functionality, like a mouse or keyboard.", "answer": "Peripherals" },
                        { "clue": "A mouse, keyboard, and monitor are all examples of these.", "answer": "Peripherals" },
                        { "clue": "External devices that connect to a computer are known by this term.", "answer": "Peripherals" },
                        { "clue": "LGA and PGA are the two major types of these for a CPU.", "answer": "CPU sockets" },
                        { "clue": "The interface between a CPU and a motherboard is one of these.", "answer": "CPU sockets" },
                        { "clue": "Land Grid Array and Pin Grid Array are two types of these.", "answer": "CPU sockets" },
                        { "clue": "A set of instructions, like adding or subtracting, that a CPU is able to run.", "answer": "Instruction Set" },
                        { "clue": "Every program is broken down into small instructions from this set for the CPU.", "answer": "Instruction Set" },
                        { "clue": "This is the vocabulary of a CPU.", "answer": "Instruction Set" },
                        { "clue": "The term for when you exceed the number of clock cycles on your CPU.", "answer": "Overclocking" },
                        { "clue": "Running a CPU at a higher speed than its manufacturer's rating.", "answer": "Overclocking" },
                        { "clue": "This practice is popular among enthusiasts to get more performance from their CPU.", "answer": "Overclocking" }
                    ]
                }
            ]
        },
        {
            "name": "Buses, Ports & Power",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "A current that flows in one direction.", "answer": "Direct Current (DC)" },
                        { "clue": "Batteries provide this type of electrical current.", "answer": "Direct Current (DC)" },
                        { "clue": "DC is the abbreviation for this type of current.", "answer": "Direct Current (DC)" },
                        { "clue": "A current that changes directions.", "answer": "Alternating Current (AC)" },
                        { "clue": "Wall outlets provide this type of electrical current.", "answer": "Alternating Current (AC)" },
                        { "clue": "AC is the abbreviation for this type of current.", "answer": "Alternating Current (AC)" },
                        { "clue": "The most common type of desktop power supply on the market today, including a second connector for the CPU.", "answer": "ATX12V" },
                        { "clue": "This power supply standard includes a dedicated power connector for the CPU.", "answer": "ATX12V" },
                        { "clue": "An evolution of the ATX standard, this is the modern standard for PSUs.", "answer": "ATX12V" },
                        { "clue": "The amount of volts and amps a device needs.", "answer": "Wattage" },
                        { "clue": "This is calculated by multiplying volts by amps.", "answer": "Wattage" },
                        { "clue": "The power consumption of a device is measured in this.", "answer": "Wattage" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "The transfer speed of USB 2.0.", "answer": "480 Mb/s" },
                        { "clue": "Hi-Speed USB has a theoretical maximum speed of this.", "answer": "480 Mb/s" },
                        { "clue": "This USB standard has a speed of 480 megabits per second.", "answer": "USB 2.0" },
                        { "clue": "The transfer speed of USB 3.0.", "answer": "5 Gb/s" },
                        { "clue": "SuperSpeed USB has a theoretical maximum speed of this.", "answer": "5 Gb/s" },
                        { "clue": "This USB standard has a speed of 5 gigabits per second.", "answer": "USB 3.0" },
                        { "clue": "The transfer speed of USB 3.1.", "answer": "10 Gb/s" },
                        { "clue": "SuperSpeed+ USB has a theoretical maximum speed of this.", "answer": "10 Gb/s" },
                        { "clue": "This USB standard has a speed of 10 gigabits per second.", "answer": "USB 3.1" },
                        { "clue": "A row of wires that interconnect the parts of our computer, like veins in a body.", "answer": "External Data Bus (EDB)" },
                        { "clue": "The EDB is the main data pathway between components.", "answer": "External Data Bus (EDB)" },
                        { "clue": "This bus carries data between the CPU, memory, and peripherals.", "answer": "External Data Bus (EDB)" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "The path between the CPU and the Northbridge.", "answer": "Front-Side Bus (FSB)" },
                        { "clue": "The FSB connects the CPU to the main memory controller.", "answer": "Front-Side Bus (FSB)" },
                        { "clue": "This bus determines the speed at which the CPU communicates with the rest of the system.", "answer": "Front-Side Bus (FSB)" },
                        { "clue": "The frequency of the FSB is measured in this unit.", "answer": "MHz" },
                        { "clue": "Megahertz is the unit used to measure the speed of the Front-Side Bus.", "answer": "MHz" },
                        { "clue": "The clock speed of the FSB is typically expressed in these units.", "answer": "MHz" },
                        { "clue": "These are components inside the CPU that let it store the data it works with.", "answer": "Registers" },
                        { "clue": "The fastest memory in a computer, located directly on the CPU.", "answer": "Registers" },
                        { "clue": "These small storage areas in the CPU hold data before and after processing.", "answer": "Registers" },
                        { "clue": "A bridge between the CPU and RAM.", "answer": "Memory Controller Chip (MCC)" },
                        { "clue": "The MCC manages the flow of data between the CPU and the main memory.", "answer": "Memory Controller Chip (MCC)" },
                        { "clue": "This chip is responsible for communication between the processor and RAM.", "answer": "Memory Controller Chip (MCC)" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "This is smaller than RAM but stores data that is used often for quick reference.", "answer": "Cache" },
                        { "clue": "A small amount of very fast memory used to store frequently accessed data.", "answer": "Cache" },
                        { "clue": "L1, L2, and L3 are levels of this type of memory.", "answer": "Cache" },
                        { "clue": "A 3.40 GHZ clock speed means this many billion cycles per second.", "answer": "3.4 billion" },
                        { "clue": "A processor running at 3.40 Gigahertz completes this many cycles each second.", "answer": "3.4 billion" },
                        { "clue": "3.40 GHz is equivalent to this many cycles per second.", "answer": "3.4 billion" },
                        { "clue": "The most popular type of ATA interface for hard drives.", "answer": "SATA" },
                        { "clue": "Serial ATA is known by this acronym.", "answer": "SATA" },
                        { "clue": "This interface replaced the older PATA standard for connecting storage devices.", "answer": "SATA" },
                        { "clue": "This feature of SATA drives means you don't have to turn your machine off to plug one in.", "answer": "Hot swappable" },
                        { "clue": "The ability to add or remove a device while the computer is running.", "answer": "Hot swappable" },
                        { "clue": "SATA drives support this feature, unlike their PATA predecessors.", "answer": "Hot swappable" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "This input standard is quickly becoming universal for display, data, and power.", "answer": "USB-C" },
                        { "clue": "This reversible USB connector is the latest standard.", "answer": "USB-C" },
                        { "clue": "Many new laptops and smartphones use this single port for everything.", "answer": "USB-C" },
                        { "clue": "The CPU has an internal one of these to keep its operations in sync.", "answer": "Clock" },
                        { "clue": "The speed of a CPU is measured by the frequency of this.", "answer": "Clock" },
                        { "clue": "This internal component of the CPU synchronizes all of its operations.", "answer": "Clock" },
                        { "clue": "A voltage sent to the clock wire is referred to as this.", "answer": "Clock cycle" },
                        { "clue": "The smallest unit of time for a processor's operation.", "answer": "Clock cycle" },
                        { "clue": "A CPU's speed in GHz refers to billions of these per second.", "answer": "Clock cycle" },
                        { "clue": "The standard for an expansion slot today, also known as PCIe.", "answer": "Peripheral Component Interconnect Express" },
                        { "clue": "PCIe is the acronym for this expansion slot standard.", "answer": "Peripheral Component Interconnect Express" },
                        { "clue": "Graphics cards and other high-speed components plug into these slots.", "answer": "Peripheral Component Interconnect Express" }
                    ]
                }
            ]
        },
        {
            "name": "RAM & Storage Types",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "A kilobyte is made up of this many bytes.", "answer": "1024" },
                        { "clue": "2 to the power of 10 bytes.", "answer": "1024" },
                        { "clue": "The number of bytes in a kilobyte.", "answer": "1024" },
                        { "clue": "Almost all RAM is this, meaning its data is cleared when the power is turned off.", "answer": "Volatile" },
                        { "clue": "This term describes memory that requires power to maintain the stored information.", "answer": "Volatile" },
                        { "clue": "The opposite of non-volatile memory like ROM.", "answer": "Volatile" },
                        { "clue": "A common type of RAM found in computers, where each bit is stored in a microscopic capacitor.", "answer": "DRAM" },
                        { "clue": "Dynamic Random-Access Memory is known by this acronym.", "answer": "DRAM" },
                        { "clue": "This type of RAM needs to be constantly refreshed to maintain its data.", "answer": "DRAM" },
                        { "clue": "This type of RAM is very fast and used for cache memory.", "answer": "SRAM" },
                        { "clue": "Static Random-Access Memory is known by this acronym.", "answer": "SRAM" },
                        { "clue": "This type of RAM does not need to be refreshed and is faster than DRAM.", "answer": "SRAM" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "This type of RAM is synchronized to the system's clock speed for quicker data processing.", "answer": "SDRAM" },
                        { "clue": "Synchronous Dynamic Random-Access Memory is known by this acronym.", "answer": "SDRAM" },
                        { "clue": "This type of RAM's operation is synchronized with the system bus.", "answer": "SDRAM" },
                        { "clue": "DDR SDRAM can perform this many reads and writes per cycle, making it twice as fast as SDRAM.", "answer": "Two" },
                        { "clue": "The 'Double Data Rate' in DDR means it can transfer data this many times per clock cycle.", "answer": "Two" },
                        { "clue": "This is the number of reads and writes per cycle for DDR SDRAM.", "answer": "Two" },
                        { "clue": "DDR4 SDRAM has this type of memory for error detection.", "answer": "ECC memory" },
                        { "clue": "Error-correcting code memory is known by this acronym.", "answer": "ECC memory" },
                        { "clue": "This type of memory can detect and correct common kinds of data corruption.", "answer": "ECC memory" },
                        { "clue": "This type of SDRAM is used for graphics memory on video adapters.", "answer": "GDDR SDRAM" },
                        { "clue": "Graphics Double Data Rate SDRAM is known by this acronym.", "answer": "GDDR SDRAM" },
                        { "clue": "This specialized type of RAM is designed for use in graphics cards.", "answer": "GDDR SDRAM" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This term refers to the size of the motherboard, with ATX and ITX being common examples.", "answer": "Form Factors" },
                        { "clue": "The physical dimensions of a motherboard are defined by this.", "answer": "Form Factors" },
                        { "clue": "ATX, Micro-ATX, and Mini-ITX are all examples of this.", "answer": "Form Factors" },
                        { "clue": "A megabyte is made up of this many kilobytes.", "answer": "1024" },
                        { "clue": "2 to the power of 20 bytes is a megabyte, which is this many kilobytes.", "answer": "1024" },
                        { "clue": "The number of kilobytes in a megabyte.", "answer": "1024" },
                        { "clue": "A gigabyte is made up of this many megabytes.", "answer": "1024" },
                        { "clue": "2 to the power of 30 bytes is a gigabyte, which is this many megabytes.", "answer": "1024" },
                        { "clue": "The number of megabytes in a gigabyte.", "answer": "1024" },
                        { "clue": "A terabyte is made up of this many gigabytes.", "answer": "1024" },
                        { "clue": "2 to the power of 40 bytes is a terabyte, which is this many gigabytes.", "answer": "1024" },
                        { "clue": "The number of gigabytes in a terabyte.", "answer": "1024" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "The 'DDR' in DDR SDRAM stands for this.", "answer": "Double Data Rate" },
                        { "clue": "This phrase indicates that the RAM can transfer data twice per clock cycle.", "answer": "Double Data Rate" },
                        { "clue": "The full name for the DDR acronym in RAM types.", "answer": "Double Data Rate" },
                        { "clue": "The more modern memory sticks that DRAM chips are put on.", "answer": "DIMM" },
                        { "clue": "Dual In-line Memory Module is known by this acronym.", "answer": "DIMM" },
                        { "clue": "Modern RAM sticks are of this type, as opposed to the older SIMM.", "answer": "DIMM" },
                        { "clue": "According to the text, this is the fastest type of short-term memory currently available.", "answer": "DDR4" },
                        { "clue": "This is the fourth generation of Double Data Rate SDRAM.", "answer": "DDR4" },
                        { "clue": "The current mainstream standard for RAM in new computers.", "answer": "DDR4" },
                        { "clue": "This form factor is used for a more powerful build.", "answer": "ATX" },
                        { "clue": "Advanced Technology eXtended is a motherboard form factor known by this acronym.", "answer": "ATX" },
                        { "clue": "This is the standard size for most desktop motherboards.", "answer": "ATX" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "This form factor is used for smaller builds.", "answer": "ITX" },
                        { "clue": "Information Technology eXtended is a motherboard form factor known by this acronym.", "answer": "ITX" },
                        { "clue": "This is a family of small form factor motherboards.", "answer": "ITX" },
                        { "clue": "This term describes the four main layers of a computer: Hardware, OS, Software, and Users.", "answer": "Abstraction" },
                        { "clue": "Simplifying a complex system by breaking it down into layers.", "answer": "Abstraction" },
                        { "clue": "This concept allows us to use a computer without needing to know the details of its inner workings.", "answer": "Abstraction" },
                        { "clue": "These are basically SSDs that plug in differently.", "answer": "NVMe" },
                        { "clue": "Non-Volatile Memory Express is a high-speed interface for SSDs.", "answer": "NVMe" },
                        { "clue": "These SSDs often come in a small stick format and plug directly into the motherboard.", "answer": "NVMe" },
                        { "clue": "The type of RAM technology described as 'Older technology' in the provided chart.", "answer": "DRAM" },
                        { "clue": "The chart lists this as the oldest type of RAM.", "answer": "DRAM" },
                        { "clue": "Dynamic RAM is the full name for this older RAM technology.", "answer": "DRAM" }
                    ]
                }
            ]
        },
        {
            "name": "The SysAdmin Role",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The common abbreviation for a System Administrator.", "answer": "Sysadmin" },
                        { "clue": "A person who is responsible for the upkeep, configuration, and reliable operation of computer systems.", "answer": "Sysadmin" },
                        { "clue": "This is the shortened term for a System Administrator.", "answer": "Sysadmin" },
                        { "clue": "This encompasses the hardware, software, network, and services required for an organization to operate.", "answer": "IT infrastructure" },
                        { "clue": "The foundation or framework that supports a system or organization's technology.", "answer": "IT infrastructure" },
                        { "clue": "The complete technological setup of a company.", "answer": "IT infrastructure" },
                        { "clue": "The four main stages of the hardware lifecycle are Procurement, Deployment, Maintenance, and this.", "answer": "Retirement" },
                        { "clue": "The final stage in the lifecycle of a piece of hardware.", "answer": "Retirement" },
                        { "clue": "When hardware becomes unusable or is no longer needed, it enters this stage.", "answer": "Retirement" },
                        { "clue": "A software or a machine that provides services to other software or machines.", "answer": "Server" },
                        { "clue": "A computer that provides data to other computers.", "answer": "Server" },
                        { "clue": "In the client-server model, this is the machine that provides the service.", "answer": "Server" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "Machines that use services provided by servers.", "answer": "Clients" },
                        { "clue": "In the client-server model, these are the machines that request the service.", "answer": "Clients" },
                        { "clue": "A desktop computer or workstation that connects to a server.", "answer": "Clients" },
                        { "clue": "A facility that stores hundreds, if not thousands, of servers.", "answer": "Data Center" },
                        { "clue": "A large group of networked computer servers typically used by organizations for the remote storage, processing, or distribution of large amounts of data.", "answer": "Data Center" },
                        { "clue": "Cloud computing services are run out of these facilities.", "answer": "Data Center" },
                        { "clue": "This switch, an acronym for Keyboard, Video, and Mouse, lets you control multiple computers with one set of peripherals.", "answer": "KVM Switch" },
                        { "clue": "A hardware device that allows a user to control multiple computers from one or more sets of keyboards, video monitors, and mice.", "answer": "KVM Switch" },
                        { "clue": "This is a useful tool for a sysadmin managing multiple servers in a rack.", "answer": "KVM Switch" },
                        { "clue": "A monthly update of all servers with the latest security patches.", "answer": "Batch Update" },
                        { "clue": "The process of updating a group of servers at once.", "answer": "Batch Update" },
                        { "clue": "Applying security patches to all servers in a single operation.", "answer": "Batch Update" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This is the stage of the hardware lifecycle where hardware is purchased or re-used.", "answer": "Procurement" },
                        { "clue": "The first stage in the hardware lifecycle.", "answer": "Procurement" },
                        { "clue": "The process of acquiring new computer hardware.", "answer": "Procurement" },
                        { "clue": "This is the stage of the hardware lifecycle where software is updated and hardware issues are fixed.", "answer": "Maintenance" },
                        { "clue": "The third stage in the hardware lifecycle, after deployment.", "answer": "Maintenance" },
                        { "clue": "Keeping hardware in good working order is the goal of this lifecycle stage.", "answer": "Maintenance" },
                        { "clue": "Reverting to a previous state after a change caused a problem.", "answer": "Rollback" },
                        { "clue": "Undoing a recent change to restore a system to a previous state.", "answer": "Rollback" },
                        { "clue": "This is a key strategy for recovering from a failed update.", "answer": "Rollback" },
                        { "clue": "The parts of the infrastructure where a service is executed and served to users.", "answer": "Production" },
                        { "clue": "The 'live' environment that users interact with.", "answer": "Production" },
                        { "clue": "Changes are typically tested in a development environment before being deployed to this environment.", "answer": "Production" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "A virtual machine running the same configuration as production, but not serving users, used for fixing issues.", "answer": "Test Environment" },
                        { "clue": "A sandboxed environment used for testing changes before they go live.", "answer": "Test Environment" },
                        { "clue": "This is where you would try to reproduce a bug reported by a user.", "answer": "Test Environment" },
                        { "clue": "A small group of servers used to detect potential issues in larger changes you want to push out.", "answer": "Canaries" },
                        { "clue": "A deployment strategy where a change is rolled out to a small subset of users first.", "answer": "Canaries" },
                        { "clue": "Named after the 'canary in a coal mine', this is a way to test changes in production with minimal risk.", "answer": "Canaries" },
                        { "clue": "Creating a roadmap to retrace the steps that led a user to an unexpected outcome.", "answer": "Reproduction Case" },
                        { "clue": "A set of steps to consistently reproduce a bug.", "answer": "Reproduction Case" },
                        { "clue": "This is essential for a developer to be able to fix a bug.", "answer": "Reproduction Case" },
                        { "clue": "Servers that lay flat and are usually mounted in a 19-inch wide server rack.", "answer": "Rack servers" },
                        { "clue": "These servers are designed to be mounted in a server rack.", "answer": "Rack servers" },
                        { "clue": "Data centers are filled with these types of servers.", "answer": "Rack servers" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "The concept that you can access your data and applications from anywhere in the world with an internet connection.", "answer": "Cloud Computing" },
                        { "clue": "The delivery of on-demand computing services over the Internet.", "answer": "Cloud Computing" },
                        { "clue": "IaaS, PaaS, and SaaS are all models of this.", "answer": "Cloud Computing" },
                        { "clue": "According to the text, it's a good rule of thumb to create a complex one of these with symbols, random numbers, and letters.", "answer": "Password" },
                        { "clue": "A secret word or phrase that must be used to gain admission to a place.", "answer": "Password" },
                        { "clue": "A string of characters that allows access to a computer, interface, or system.", "answer": "Password" },
                        { "clue": "In Linux, this command is typically used to execute commands as an admin.", "answer": "sudo" },
                        { "clue": "Stands for 'superuser do', this command elevates privileges for a single command.", "answer": "sudo" },
                        { "clue": "This command is the recommended way to perform administrative tasks in Linux without logging in as root.", "answer": "sudo" },
                        { "clue": "A stand-by machine that is exactly the same as a production machine but won't receive traffic until you enable it.", "answer": "Secondary Machine" },
                        { "clue": "A backup machine that can take over if the primary machine fails.", "answer": "Secondary Machine" },
                        { "clue": "This is a key component of a high-availability setup.", "answer": "Secondary Machine" }
                    ]
                }
            ]
        },
        {
            "name": "Infrastructure Models",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The cloud alternative to maintaining your own infrastructure, where providers give you pre-configured virtual machines.", "answer": "IaaS" },
                        { "clue": "Infrastructure as a Service is known by this acronym.", "answer": "IaaS" },
                        { "clue": "This cloud model provides virtualized computing resources over the internet.", "answer": "IaaS" },
                        { "clue": "The cloud alternative to maintaining your own software, like using Microsoft Office 365 instead of installing it on every machine.", "answer": "SaaS" },
                        { "clue": "Software as a Service is known by this acronym.", "answer": "SaaS" },
                        { "clue": "This cloud model delivers software applications over the internet, on a subscription basis.", "answer": "SaaS" },
                        { "clue": "An all-in-one cloud solution for building and deploying web applications, including code building, database storage, and serving the application.", "answer": "PaaS" },
                        { "clue": "Platform as a Service is known by this acronym.", "answer": "PaaS" },
                        { "clue": "This cloud model provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure.", "answer": "PaaS" },
                        { "clue": "Amazon Web Services (EC2 instances) and Google Compute Engine are popular providers of this service model.", "answer": "IaaS" },
                        { "clue": "These services provide virtual servers on demand.", "answer": "IaaS" },
                        { "clue": "The most basic category of cloud computing services.", "answer": "IaaS" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "A service that centralizes an organization's users and computers in one location for management.", "answer": "DaaS" },
                        { "clue": "Directory as a Service is known by this acronym.", "answer": "DaaS" },
                        { "clue": "This service provides a centralized directory for managing user identities and access.", "answer": "DaaS" },
                        { "clue": "Heroku and Windows Azure are popular options for this service model.", "answer": "PaaS" },
                        { "clue": "These platforms allow developers to build and deploy applications without managing the underlying infrastructure.", "answer": "PaaS" },
                        { "clue": "This service model is popular for web application hosting.", "answer": "PaaS" },
                        { "clue": "A subset of cloud computing where a platform is provided for customers to run their network service.", "answer": "NaaS" },
                        { "clue": "Network as a Service is known by this acronym.", "answer": "NaaS" },
                        { "clue": "This service allows companies to offshore their networking services.", "answer": "NaaS" },
                        { "clue": "Cloud services provided to you by a third party.", "answer": "Public Cloud" },
                        { "clue": "The most common type of cloud computing deployment.", "answer": "Public Cloud" },
                        { "clue": "AWS, Azure, and Google Cloud are examples of this.", "answer": "Public Cloud" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "When your company owns the services and the rest of your infrastructure, whether on-site or in a remote data center.", "answer": "Private Cloud" },
                        { "clue": "A cloud computing environment dedicated to a single organization.", "answer": "Private Cloud" },
                        { "clue": "The opposite of a public cloud.", "answer": "Private Cloud" },
                        { "clue": "A mix of both public and private cloud.", "answer": "Hybrid Cloud" },
                        { "clue": "A cloud computing environment that uses a mix of on-premises, private cloud and third-party, public cloud services.", "answer": "Hybrid Cloud" },
                        { "clue": "This cloud model offers the benefits of both public and private clouds.", "answer": "Hybrid Cloud" },
                        { "clue": "This ensures that each Virtual Machine receives a balanced number of queries.", "answer": "Load Balancer" },
                        { "clue": "A device that acts as a reverse proxy and distributes network or application traffic across a number of servers.", "answer": "Load Balancer" },
                        { "clue": "This is used to increase capacity and reliability of applications.", "answer": "Load Balancer" },
                        { "clue": "This allows a service to increase or reduce capacity as needed, with the owner only paying for machines in use.", "answer": "Autoscaling" },
                        { "clue": "A method used in cloud computing that dynamically adjusts the amount of computational resources in a server farm.", "answer": "Autoscaling" },
                        { "clue": "This helps to ensure that a service has enough capacity to handle the current load.", "answer": "Autoscaling" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "When setting up cloud resources, these are geographical locations containing a number of data centers.", "answer": "Regions" },
                        { "clue": "A cloud provider's physical presence is divided into these geographical areas.", "answer": "Regions" },
                        { "clue": "Examples include 'us-east-1' and 'eu-west-2'.", "answer": "Regions" },
                        { "clue": "In the cloud, each data center within a region is called this.", "answer": "Zone" },
                        { "clue": "A region is made up of multiple of these, for redundancy.", "answer": "Zone" },
                        { "clue": "An availability zone is often referred to as this for short.", "answer": "Zone" },
                        { "clue": "Windows Active Directory and OpenLDAP are popular examples of this type of service.", "answer": "Directory services" },
                        { "clue": "Services that store and organize information about a computer network's users and resources.", "answer": "Directory services" },
                        { "clue": "These services provide a central location for network administration and security.", "answer": "Directory services" },
                        { "clue": "This type of service has better performance because only one service uses one machine.", "answer": "Dedicated Hardware" },
                        { "clue": "A physical server that is dedicated to a single tenant.", "answer": "Dedicated Hardware" },
                        { "clue": "The opposite of a virtualized service.", "answer": "Dedicated Hardware" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "With this type of service, you can run ten services on ten different instances, all on one physical server.", "answer": "Virtual Service" },
                        { "clue": "A service that runs in a virtualized environment.", "answer": "Virtual Service" },
                        { "clue": "This allows for efficient use of hardware resources by running multiple services on a single physical machine.", "answer": "Virtual Service" },
                        { "clue": "The primary benefit of virtualizing your service over dedicated hardware.", "answer": "Cost" },
                        { "clue": "Virtualization helps to reduce this by allowing for better hardware utilization.", "answer": "Cost" },
                        { "clue": "The main reason why companies choose to virtualize their services.", "answer": "Cost" },
                        { "clue": "Because local disks can disappear when demand is lower, they should be considered this, meaning short-lived.", "answer": "Ephemeral" },
                        { "clue": "Temporary storage that is lost when the instance is stopped.", "answer": "Ephemeral" },
                        { "clue": "This type of storage is not suitable for long-term data.", "answer": "Ephemeral" },
                        { "clue": "A service running on this will have better performance than a service running in a virtualized environment.", "answer": "Dedicated hardware" },
                        { "clue": "For performance-critical applications, this is often the preferred choice.", "answer": "Dedicated hardware" },
                        { "clue": "This provides the highest level of performance, as all resources are dedicated to a single tenant.", "answer": "Dedicated hardware" }
                    ]
                }
            ]
        },
        {
            "name": "Network Services",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "This maps human-understandable names to IP addresses.", "answer": "DNS" },
                        { "clue": "The Domain Name System is known by this acronym.", "answer": "DNS" },
                        { "clue": "The 'phonebook of the Internet'.", "answer": "DNS" },
                        { "clue": "This automates the configuration process of hosts on a network, like assigning IP addresses.", "answer": "DHCP" },
                        { "clue": "The Dynamic Host Configuration Protocol is known by this acronym.", "answer": "DHCP" },
                        { "clue": "This protocol is used to automatically assign IP addresses to devices on a network.", "answer": "DHCP" },
                        { "clue": "A method used for transferring files from one computer to another, traditionally listening on port 21.", "answer": "FTP" },
                        { "clue": "The File Transfer Protocol is known by this acronym.", "answer": "FTP" },
                        { "clue": "This protocol is used for uploading and downloading files from a server.", "answer": "FTP" },
                        { "clue": "This is used to keep the clock synchronized on machines connected to a network.", "answer": "NTP" },
                        { "clue": "The Network Time Protocol is known by this acronym.", "answer": "NTP" },
                        { "clue": "This protocol is used to synchronize the clocks of computers over a network.", "answer": "NTP" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "An internal network inside a company, accessible only if you're on the company's network.", "answer": "Intranet" },
                        { "clue": "A private network contained within an enterprise.", "answer": "Intranet" },
                        { "clue": "The opposite of the public internet.", "answer": "Intranet" },
                        { "clue": "It acts as an intermediary between a company's network and the Internet.", "answer": "Proxy Server" },
                        { "clue": "A server that acts as a gateway between a local network and a larger-scale network such as the internet.", "answer": "Proxy Server" },
                        { "clue": "This can be used to filter web traffic and improve security.", "answer": "Proxy Server" },
                        { "clue": "The secure version of FTP, where data is sent through SSH and is encrypted.", "answer": "SFTP" },
                        { "clue": "Secure File Transfer Protocol is known by this acronym.", "answer": "SFTP" },
                        { "clue": "This is the recommended protocol for secure file transfers.", "answer": "SFTP" },
                        { "clue": "This protocol doesn't require user authentication, so files stored on it should be generic and not need to be secure.", "answer": "TFTP" },
                        { "clue": "Trivial File Transfer Protocol is known by this acronym.", "answer": "TFTP" },
                        { "clue": "A simplified version of FTP, often used for booting diskless workstations.", "answer": "TFTP" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This allows you to boot into a software that's available over the network, often from a TFTP server.", "answer": "PXE Boot" },
                        { "clue": "Preboot Execution Environment is known by this acronym.", "answer": "PXE Boot" },
                        { "clue": "This is a method of booting a computer from a network interface, rather than a local disk.", "answer": "PXE Boot" },
                        { "clue": "To set up a website, you can purchase a domain name from one of these companies, like GoDaddy.com.", "answer": "Domain registrar" },
                        { "clue": "A company that manages the reservation of Internet domain names.", "answer": "Domain registrar" },
                        { "clue": "You buy your website's name from one of these.", "answer": "Domain registrar" },
                        { "clue": "Using a local one of these files contains static IP addresses to hostname mappings.", "answer": "Host file" },
                        { "clue": "A text file used by an operating system to map hostnames to IP addresses.", "answer": "Host file" },
                        { "clue": "This file is checked before DNS to resolve a hostname.", "answer": "Host file" },
                        { "clue": "If you enable this, your computers will be leased an IP address from a server.", "answer": "DHCP" },
                        { "clue": "This is the easiest way to manage IP addresses on a large network.", "answer": "DHCP" },
                        { "clue": "Dynamic Host Configuration Protocol helps automate network configuration.", "answer": "DHCP" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "A program that provides DNS, DHCP, TFTP, and PXE services in a simple package.", "answer": "Dnsmasq" },
                        { "clue": "A lightweight, easy to configure DNS forwarder and DHCP server.", "answer": "Dnsmasq" },
                        { "clue": "This is a popular choice for small networks and embedded systems.", "answer": "Dnsmasq" },
                        { "clue": "A secure version of HTTP.", "answer": "HTTPS" },
                        { "clue": "Hypertext Transfer Protocol Secure is known by this acronym.", "answer": "HTTPS" },
                        { "clue": "This protocol uses encryption to secure communication between a web browser and a server.", "answer": "HTTPS" },
                        { "clue": "The shorthand for the Windows Update Service in Powershell.", "answer": "wuauserv" },
                        { "clue": "This is the service name for Windows Update.", "answer": "wuauserv" },
                        { "clue": "You can manage the Windows Update service in PowerShell using this name.", "answer": "wuauserv" },
                        { "clue": "This protocol is used for sending emails.", "answer": "SMTP" },
                        { "clue": "Simple Mail Transfer Protocol is known by this acronym.", "answer": "SMTP" },
                        { "clue": "Email clients use this protocol to send messages to a mail server.", "answer": "SMTP" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "This email protocol downloads email from a server onto your local device and then deletes it from the server.", "answer": "POP3" },
                        { "clue": "Post Office Protocol version 3 is known by this acronym.", "answer": "POP3" },
                        { "clue": "This protocol is suitable for users who only access their email from one device.", "answer": "POP3" },
                        { "clue": "This email protocol allows you to download emails from a server onto multiple devices, keeping the messages on the server.", "answer": "IMAP" },
                        { "clue": "Internet Message Access Protocol is known by this acronym.", "answer": "IMAP" },
                        { "clue": "This protocol is suitable for users who access their email from multiple devices.", "answer": "IMAP" },
                        { "clue": "This protocol enables files to be shared over a network, and is easily set up in a Linux environment.", "answer": "NFS" },
                        { "clue": "Network File System is known by this acronym.", "answer": "NFS" },
                        { "clue": "A distributed file system protocol allowing a user on a client computer to access files over a computer network much like local storage is accessed.", "answer": "NFS" },
                        { "clue": "This file sharing service is similar to NFS but works better with Windows operating systems.", "answer": "Samba" },
                        { "clue": "A free software re-implementation of the SMB networking protocol.", "answer": "Samba" },
                        { "clue": "This allows for file and print sharing between Linux and Windows systems.", "answer": "Samba" }
                    ]
                }
            ]
        },
        {
            "name": "Directory Services",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "Used to access information in directory services over a network.", "answer": "LDAP" },
                        { "clue": "Lightweight Directory Access Protocol is known by this acronym.", "answer": "LDAP" },
                        { "clue": "This protocol is used to query and modify items in a directory service.", "answer": "LDAP" },
                        { "clue": "Two of the most popular directory services that use LDAP are Active Directory and this.", "answer": "OpenLDAP" },
                        { "clue": "A free, open-source implementation of the Lightweight Directory Access Protocol.", "answer": "OpenLDAP" },
                        { "clue": "This is a popular alternative to Microsoft's Active Directory.", "answer": "OpenLDAP" },
                        { "clue": "A client authenticates to a directory server using this operation.", "answer": "Bind operation" },
                        { "clue": "The process of authenticating to an LDAP server.", "answer": "Bind operation" },
                        { "clue": "This operation establishes a connection and authenticates a client to the directory server.", "answer": "Bind operation" },
                        { "clue": "The type of LDAP bind where the password is sent in plaintext.", "answer": "Simple bind" },
                        { "clue": "This is the most basic, and least secure, type of LDAP authentication.", "answer": "Simple bind" },
                        { "clue": "For this bind type, the password is not encrypted during transit.", "answer": "Simple bind" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "The unique name for an entry in a directory service, including attributes and values.", "answer": "Distinguished Name" },
                        { "clue": "A fully qualified, unique name for an object in a directory.", "answer": "Distinguished Name" },
                        { "clue": "This is like a full path to an object in the directory tree.", "answer": "Distinguished Name" },
                        { "clue": "This contains a descriptor of the object, like the full name for a user account.", "answer": "Common Name" },
                        { "clue": "The 'CN' in an LDAP distinguished name stands for this.", "answer": "Common Name" },
                        { "clue": "This attribute is often used to store a user's full name.", "answer": "Common Name" },
                        { "clue": "This network authentication protocol is a common method for authentication in a SASL bind.", "answer": "Kerberos" },
                        { "clue": "A ticket-based authentication system used in many enterprise networks.", "answer": "Kerberos" },
                        { "clue": "This protocol uses a trusted third party, known as the Key Distribution Center, to authenticate users.", "answer": "Kerberos" },
                        { "clue": "This contains a lookup service that provides mapping between network resources and their network addresses.", "answer": "Directory Server" },
                        { "clue": "A server that hosts a directory service.", "answer": "Directory Server" },
                        { "clue": "Active Directory and OpenLDAP are examples of software that runs on this type of server.", "answer": "Directory Server" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "The stored directory data can be copied and distributed across a number of physically distributed servers using this type of server.", "answer": "Replication Server" },
                        { "clue": "A server that is a copy of another server, used for redundancy and load balancing.", "answer": "Replication Server" },
                        { "clue": "This is a key component of a high-availability directory service.", "answer": "Replication Server" },
                        { "clue": "In a directory service, these are containers referred to as OUs.", "answer": "Organizational units" },
                        { "clue": "A container within a directory that can hold users, groups, computers, and other OUs.", "answer": "Organizational units" },
                        { "clue": "These are used to organize objects in a directory for easier management.", "answer": "Organizational units" },
                        { "clue": "This makes it easier to administer access rights by changing role membership and allowing for inheritance.", "answer": "Role-based access control" },
                        { "clue": "A method of restricting network access based on the roles of individual users within an enterprise.", "answer": "Role-based access control" },
                        { "clue": "RBAC is the acronym for this access control model.", "answer": "Role-based access control" },
                        { "clue": "The 1988 X.500 directory standard included protocols like DAP, DSP, DISP, and this.", "answer": "DOP" },
                        { "clue": "Directory Operational Bindings Management Protocol is part of the X.500 standard.", "answer": "DOP" },
                        { "clue": "This was one of the protocols defined in the original X.500 directory standard.", "answer": "DOP" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "Directory services provides centralized authentication, authorization, and this, also known as AAA.", "answer": "Accounting" },
                        { "clue": "The third 'A' in AAA security.", "answer": "Accounting" },
                        { "clue": "The process of tracking user activity on a network.", "answer": "Accounting" },
                        { "clue": "An LDAP operation to add a new user object to the directory server database.", "answer": "Add" },
                        { "clue": "The LDAP command used to create a new entry in the directory.", "answer": "Add" },
                        { "clue": "This is the operation you would use to provision a new user in LDAP.", "answer": "Add" },
                        { "clue": "An LDAP operation to remove an entry from the directory server database.", "answer": "Delete" },
                        { "clue": "The LDAP command used to remove an existing entry from the directory.", "answer": "Delete" },
                        { "clue": "This is the operation you would use to deprovision a user in LDAP.", "answer": "Delete" },
                        { "clue": "This type of LDAP bind involves a secure challenge-response authentication scheme.", "answer": "SASL bind" },
                        { "clue": "Simple Authentication and Security Layer is a framework for authentication and data security.", "answer": "SASL bind" },
                        { "clue": "This is a more secure alternative to a simple bind in LDAP.", "answer": "SASL bind" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "By having these of your directory server located in each office, you can answer directory service queries more quickly.", "answer": "Replicas" },
                        { "clue": "Copies of a directory server that are distributed across a network.", "answer": "Replicas" },
                        { "clue": "This helps to improve the performance and availability of a directory service.", "answer": "Replicas" },
                        { "clue": "An easier way to manage configurations for services and hardware by pushing changes to multiple systems at once.", "answer": "Centralized configuration management" },
                        { "clue": "A system that allows you to manage the configuration of multiple computers from a central location.", "answer": "Centralized configuration management" },
                        { "clue": "Tools like Puppet, Chef, and Ansible are used for this.", "answer": "Centralized configuration management" },
                        { "clue": "This term refers to the LDAP entry format or LDAP notation for records in the directory service.", "answer": "Entry" },
                        { "clue": "A record in an LDAP directory is known as this.", "answer": "Entry" },
                        { "clue": "Each user, group, and computer in a directory is represented by one of these.", "answer": "Entry" },
                        { "clue": "In LDAP notation, this is used for entries in directory services to describe attributes using values.", "answer": "LDAP notation" },
                        { "clue": "A text-based format for representing LDAP entries and search filters.", "answer": "LDAP notation" },
                        { "clue": "This notation is used to define the structure of an LDAP directory.", "answer": "LDAP notation" }
                    ]
                }
            ]
        },
        {
            "name": "Data Recovery & Backups",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The process of trying to restore data after an unexpected event that results in data loss or corruption.", "answer": "Data recovery" },
                        { "clue": "Getting back lost or corrupted data.", "answer": "Data recovery" },
                        { "clue": "This can be done from a backup or by using specialized software to recover data from a damaged drive.", "answer": "Data recovery" },
                        { "clue": "A well-thought-out plan and procedure in place for a data-loss event.", "answer": "Disaster plan" },
                        { "clue": "A set of procedures to recover and protect a business IT infrastructure in the event of a disaster.", "answer": "Disaster plan" },
                        { "clue": "This should include regular backups and a clear recovery procedure.", "answer": "Disaster plan" },
                        { "clue": "This involves making a copy of the data to be fully backed up.", "answer": "Full backup" },
                        { "clue": "A complete copy of all data on a system.", "answer": "Full backup" },
                        { "clue": "This is the most basic and complete type of backup.", "answer": "Full backup" },
                        { "clue": "This type of backup only backs up files that are changed, or have been created since the last full backup.", "answer": "Differential Backup" },
                        { "clue": "A backup that copies all files that have changed since the last full backup.", "answer": "Differential Backup" },
                        { "clue": "To restore from this type of backup, you need the last full backup and the latest differential backup.", "answer": "Differential Backup" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "This type of backup only backs up data that's changed in files since the last one of its kind.", "answer": "Regular Incremental Backup" },
                        { "clue": "A backup that copies all files that have changed since the last incremental backup.", "answer": "Regular Incremental Backup" },
                        { "clue": "To restore from this type of backup, you need the last full backup and all subsequent incremental backups.", "answer": "Regular Incremental Backup" },
                        { "clue": "A method of taking multiple physical disks and combining them into one large virtual disk.", "answer": "RAID" },
                        { "clue": "Redundant Array of Independent Disks is known by this acronym.", "answer": "RAID" },
                        { "clue": "This can be used to improve performance and provide redundancy.", "answer": "RAID" },
                        { "clue": "A file transfer utility designed to efficiently transfer and synchronize files between locations or computers.", "answer": "rsync" },
                        { "clue": "A popular command-line tool for synchronizing files and directories.", "answer": "rsync" },
                        { "clue": "This tool is often used for backups and mirroring.", "answer": "rsync" },
                        { "clue": "Apple's first-party backup solution that operates using an incremental backup model.", "answer": "Time Machine" },
                        { "clue": "The built-in backup software for macOS.", "answer": "Time Machine" },
                        { "clue": "This software creates incremental backups of your Mac to an external drive.", "answer": "Time Machine" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "Microsoft's first-party backup solution with two modes of operation: file-based and system image.", "answer": "Backup and Restore" },
                        { "clue": "The built-in backup software for Windows.", "answer": "Backup and Restore" },
                        { "clue": "This software allows you to create backups of your files or a complete system image.", "answer": "Backup and Restore" },
                        { "clue": "According to the text, the most efficient type of backup.", "answer": "Incremental backups" },
                        { "clue": "These backups are the fastest to create and use the least amount of storage space.", "answer": "Incremental backups" },
                        { "clue": "The downside of these backups is that they can be slower to restore from.", "answer": "Incremental backups" },
                        { "clue": "A collection of documented procedures on how to react to and handle an emergency or disaster scenario.", "answer": "Disaster Recovery Plan" },
                        { "clue": "A DRP is a key part of a business continuity plan.", "answer": "Disaster Recovery Plan" },
                        { "clue": "This plan outlines the steps to take to recover from a disaster.", "answer": "Disaster Recovery Plan" },
                        { "clue": "This is created after an incident to document in detail what happened and how it was fixed.", "answer": "Post-mortem" },
                        { "clue": "A process of analyzing an incident to learn from it and prevent it from happening again.", "answer": "Post-mortem" },
                        { "clue": "This is a key part of the incident response process.", "answer": "Post-mortem" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "Procedures or systems in place that will proactively minimize the impact of a disaster, like regular backups.", "answer": "Preventative Measures" },
                        { "clue": "Actions taken to prevent a disaster from occurring or to reduce its impact.", "answer": "Preventative Measures" },
                        { "clue": "This is the first line of defense in disaster recovery.", "answer": "Preventative Measures" },
                        { "clue": "This is meant to alert you and your team that a disaster has occurred that can impact operations.", "answer": "Detection Measure" },
                        { "clue": "A system that monitors for signs of a disaster.", "answer": "Detection Measure" },
                        { "clue": "This is the second line of defense in disaster recovery, after preventative measures.", "answer": "Detection Measure" },
                        { "clue": "The first step in designing a Disaster Recovery Plan.", "answer": "Perform Risk Assessment" },
                        { "clue": "Identifying potential threats and vulnerabilities to your IT infrastructure.", "answer": "Perform Risk Assessment" },
                        { "clue": "This helps you to prioritize your recovery efforts.", "answer": "Perform Risk Assessment" },
                        { "clue": "Backups should be stored in multiple physical locations, one here and one off-site.", "answer": "Locally" },
                        { "clue": "The 3-2-1 backup rule recommends having one copy of your data stored in this way.", "answer": "Locally" },
                        { "clue": "For quick recovery, it's a good idea to have a backup stored in this way.", "answer": "Locally" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "A pro of this type of storage is that data is physically nearby.", "answer": "Local Storage" },
                        { "clue": "Storage that is directly attached to the computer you are using.", "answer": "Local Storage" },
                        { "clue": "An external hard drive is an example of this.", "answer": "Local Storage" },
                        { "clue": "A con of this type of storage is that it needs security and encryption.", "answer": "Off-Site Storage" },
                        { "clue": "Storage that is located in a different physical location from your primary data.", "answer": "Off-Site Storage" },
                        { "clue": "Cloud storage is a popular form of this.", "answer": "Off-Site Storage" },
                        { "clue": "A post-mortem should contain a brief summary, a detailed timeline, resolution efforts, specific actions to avoid the same scenario, and this.", "answer": "Root cause" },
                        { "clue": "The fundamental reason why an incident occurred.", "answer": "Root cause" },
                        { "clue": "Identifying this is the key to preventing an incident from happening again.", "answer": "Root cause" },
                        { "clue": "The standard medium for archival backup data storage, which uses spools of magnetic tape.", "answer": "Data tapes" },
                        { "clue": "A long-term, high-capacity storage medium.", "answer": "Data tapes" },
                        { "clue": "This is a cost-effective solution for archiving large amounts of data.", "answer": "Data tapes" }
                    ]
                }
            ]
        },
        {
            "name": "Windows Command Line",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The command to change directories in PowerShell.", "answer": "cd" },
                        { "clue": "This command allows you to navigate the file system in the command line.", "answer": "cd" },
                        { "clue": "Short for 'change directory'.", "answer": "cd" },
                        { "clue": "This command in PowerShell will tell you which directory you are currently in.", "answer": "pwd" },
                        { "clue": "Short for 'print working directory'.", "answer": "pwd" },
                        { "clue": "This command displays the full path of the current directory.", "answer": "pwd" },
                        { "clue": "This command is used to make a new directory.", "answer": "mkdir" },
                        { "clue": "Short for 'make directory'.", "answer": "mkdir" },
                        { "clue": "This command creates a new folder in the current directory.", "answer": "mkdir" },
                        { "clue": "The command to copy a file or directory.", "answer": "cp" },
                        { "clue": "Short for 'copy'.", "answer": "cp" },
                        { "clue": "This command is used to duplicate files and directories.", "answer": "cp" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "This command permanently removes files and directories.", "answer": "rm" },
                        { "clue": "Short for 'remove'.", "answer": "rm" },
                        { "clue": "This command is used to delete files and directories.", "answer": "rm" },
                        { "clue": "This command is used to display the contents of a file.", "answer": "cat" },
                        { "clue": "Short for 'concatenate'.", "answer": "cat" },
                        { "clue": "This command prints the entire content of a file to the screen.", "answer": "cat" },
                        { "clue": "This command allows you to view the contents of a file one page at a time.", "answer": "more" },
                        { "clue": "This is a pager that displays text one screen at a time.", "answer": "more" },
                        { "clue": "A simpler alternative to the 'less' command.", "answer": "more" },
                        { "clue": "The command to see the true name of an alias, like `ls`.", "answer": "Get-Alias" },
                        { "clue": "This PowerShell cmdlet displays the definition of an alias.", "answer": "Get-Alias" },
                        { "clue": "Use this to find out what a shorthand command actually does.", "answer": "Get-Alias" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This command, also known as `sls`, is used to find words or strings within files.", "answer": "Select-String" },
                        { "clue": "The PowerShell equivalent of the 'grep' command in Linux.", "answer": "Select-String" },
                        { "clue": "This cmdlet searches for text in files and strings.", "answer": "Select-String" },
                        { "clue": "This operator (`>`) lets you change where standard output goes, such as to a file.", "answer": "Redirector operator" },
                        { "clue": "Used to send the output of a command to a file instead of the screen.", "answer": "Redirector operator" },
                        { "clue": "This is a fundamental feature of command-line shells.", "answer": "Redirector operator" },
                        { "clue": "This operator (`|`) is used to send the output of one command into the input of another.", "answer": "Pipe operator" },
                        { "clue": "Used to chain commands together, creating powerful one-liners.", "answer": "Pipe operator" },
                        { "clue": "This is a key concept in both PowerShell and Linux shells.", "answer": "Pipe operator" },
                        { "clue": "This command is used to get a list of local users on the machine.", "answer": "Get-LocalUser" },
                        { "clue": "This PowerShell cmdlet retrieves information about local user accounts.", "answer": "Get-LocalUser" },
                        { "clue": "Use this to see who has an account on a Windows machine.", "answer": "Get-LocalUser" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "This command is used to see the members within a specific local group.", "answer": "Get-LocalGroupMember" },
                        { "clue": "This PowerShell cmdlet retrieves the members of a local group.", "answer": "Get-LocalGroupMember" },
                        { "clue": "Use this to find out who is in the 'Administrators' group, for example.", "answer": "Get-LocalGroupMember" },
                        { "clue": "The `net user` command with this parameter is used to add a new user.", "answer": "/add" },
                        { "clue": "This switch is used with 'net user' to create a new user account.", "answer": "/add" },
                        { "clue": "The command to create a new user named 'john' would be 'net user john /add'.", "answer": "/add" },
                        { "clue": "The `net user` command with this parameter requires a user to change their password at the next logon.", "answer": "/logonpasswordchg:yes" },
                        { "clue": "This switch is used with 'net user' to force a password change at the next login.", "answer": "/logonpasswordchg:yes" },
                        { "clue": "A useful security feature when creating new user accounts.", "answer": "/logonpasswordchg:yes" },
                        { "clue": "This utility is used to see which Access Control Lists are assigned to a file.", "answer": "icacls" },
                        { "clue": "A command-line utility for displaying and modifying file and folder permissions.", "answer": "icacls" },
                        { "clue": "Stands for 'integrity control access control list'.", "answer": "icacls" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "To run an `.exe` file from the command prompt, you can type in its name or this.", "answer": "Absolute path" },
                        { "clue": "The full path to a file, starting from the root of the file system.", "answer": "Absolute path" },
                        { "clue": "This allows you to run a program from any directory.", "answer": "Absolute path" },
                        { "clue": "The `rm` command with this parameter is used to remove a directory and its contents.", "answer": "-Recurse" },
                        { "clue": "This switch tells 'rm' to delete a directory and everything inside it.", "answer": "-Recurse" },
                        { "clue": "The equivalent of '-r' in Linux.", "answer": "-Recurse" },
                        { "clue": "To see just the first 10 lines of a file, you would use the `cat` command with this parameter.", "answer": "-Head" },
                        { "clue": "This switch is used with 'cat' to display the beginning of a file.", "answer": "-Head" },
                        { "clue": "The PowerShell equivalent of the 'head' command in Linux.", "answer": "-Head" },
                        { "clue": "This PowerShell command is the true name for the `ls` alias.", "answer": "Get-ChildItem" },
                        { "clue": "This cmdlet gets the items in one or more specified locations.", "answer": "Get-ChildItem" },
                        { "clue": "The underlying command for both 'ls' and 'dir' in PowerShell.", "answer": "Get-ChildItem" }
                    ]
                }
            ]
        },
        {
            "name": "Linux Command Line",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "In Linux, the command line interface is called this.", "answer": "Shell" },
                        { "clue": "A program that takes commands from the keyboard and gives them to the operating system to perform.", "answer": "Shell" },
                        { "clue": "Bash is a popular example of this.", "answer": "Shell" },
                        { "clue": "The language used to interact with the shell.", "answer": "Bash" },
                        { "clue": "Bourne Again SHell is a popular command language for Linux.", "answer": "Bash" },
                        { "clue": "The default shell on many Linux distributions.", "answer": "Bash" },
                        { "clue": "The main directory that all others stem from, denoted by a forward slash (`/`).", "answer": "Root Directory" },
                        { "clue": "The top-level directory of the file system.", "answer": "Root Directory" },
                        { "clue": "All other directories are subdirectories of this.", "answer": "Root Directory" },
                        { "clue": "This directory stores all essential binaries or programs.", "answer": "/bin" },
                        { "clue": "The directory that contains essential command-line utilities.", "answer": "/bin" },
                        { "clue": "Commands like 'ls', 'cp', and 'mv' are located here.", "answer": "/bin" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "This directory contains information about currently running processes.", "answer": "/proc" },
                        { "clue": "A virtual filesystem that provides information about the system's processes.", "answer": "/proc" },
                        { "clue": "You can find the PID of a process in this directory.", "answer": "/proc" },
                        { "clue": "A way to specify additional options for a command, like `-l` or `-a`.", "answer": "Flag" },
                        { "clue": "A command-line option that modifies the behavior of a command.", "answer": "Flag" },
                        { "clue": "These are often preceded by a hyphen or double hyphen.", "answer": "Flag" },
                        { "clue": "This command allows you to view the contents of a large file page by page, with more features than `more`.", "answer": "less" },
                        { "clue": "A pager that allows you to scroll both forwards and backwards through a file.", "answer": "less" },
                        { "clue": "The name is a pun on the 'more' command.", "answer": "less" },
                        { "clue": "This command is used to search for strings through single or multiple files.", "answer": "grep" },
                        { "clue": "A powerful command-line utility for searching plain-text data sets for lines that match a regular expression.", "answer": "grep" },
                        { "clue": "The name comes from the ed command g/re/p (globally search a regular expression and print).", "answer": "grep" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This file is similar to `$null` in Windows, where errors can be redirected.", "answer": "/dev/null" },
                        { "clue": "A special file that discards all data written to it.", "answer": "/dev/null" },
                        { "clue": "The 'black hole' of the Linux file system.", "answer": "/dev/null" },
                        { "clue": "This command lets the shell know you want to run a line as a superuser.", "answer": "sudo" },
                        { "clue": "The command to execute a command with elevated privileges.", "answer": "sudo" },
                        { "clue": "Short for 'superuser do'.", "answer": "sudo" },
                        { "clue": "The file that contains user information.", "answer": "/etc/passwd" },
                        { "clue": "A plain text file that contains a list of the system's accounts, giving for each account some useful information like user ID, group ID, home directory, shell, etc.", "answer": "/etc/passwd" },
                        { "clue": "This file is world-readable, but only root can modify it.", "answer": "/etc/passwd" },
                        { "clue": "The command used to change a user's password.", "answer": "passwd" },
                        { "clue": "This command updates a user's authentication tokens.", "answer": "passwd" },
                        { "clue": "You can use this to change your own password, or a sysadmin can use it to change another user's password.", "answer": "passwd" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "The commands to add and delete a user, respectively.", "answer": "useradd and userdel" },
                        { "clue": "These two commands are used for user account management in Linux.", "answer": "useradd and userdel" },
                        { "clue": "The commands for creating and removing user accounts.", "answer": "useradd and userdel" },
                        { "clue": "This command is used to change permissions on a file.", "answer": "chmod" },
                        { "clue": "Short for 'change mode'.", "answer": "chmod" },
                        { "clue": "This command can be used with symbolic or octal notation to set file permissions.", "answer": "chmod" },
                        { "clue": "This command is used to change the owner of a file.", "answer": "chown" },
                        { "clue": "Short for 'change owner'.", "answer": "chown" },
                        { "clue": "This command can also be used to change the group ownership of a file.", "answer": "chown" },
                        { "clue": "To install a Debian package, you use this command with the `-i` flag.", "answer": "dpkg" },
                        { "clue": "The package manager for Debian-based systems.", "answer": "dpkg" },
                        { "clue": "This is a lower-level tool than 'apt', used to install and manage individual .deb packages.", "answer": "dpkg" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "The package manager used in Ubuntu.", "answer": "apt" },
                        { "clue": "Advanced Package Tool is a higher-level tool for managing packages on Debian-based systems.", "answer": "apt" },
                        { "clue": "This tool handles dependencies and makes package management easier.", "answer": "apt" },
                        { "clue": "To see what version of the kernel you have, you run this command with the `-r` flag.", "answer": "uname" },
                        { "clue": "Short for 'unix name'.", "answer": "uname" },
                        { "clue": "This command prints information about the current system.", "answer": "uname" },
                        { "clue": "A command line tool in Linux that supports both MBR and GPT for disk partitioning.", "answer": "parted" },
                        { "clue": "A powerful tool for creating, destroying, resizing, moving, and copying partitions.", "answer": "parted" },
                        { "clue": "This is a more modern alternative to the 'fdisk' command.", "answer": "parted" },
                        { "clue": "This special permission, represented by a 4 in numerical format, enables files to be run with the permission of the owner.", "answer": "SetUID" },
                        { "clue": "This is used to allow users to run a program with the permissions of the file's owner.", "answer": "SetUID" },
                        { "clue": "A powerful, and potentially dangerous, permission bit.", "answer": "SetUID" }
                    ]
                }
            ]
        },
        {
            "name": "Users & Permissions",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The two different types of users are Standard users and these.", "answer": "Administrators" },
                        { "clue": "Users with elevated privileges who can make system-wide changes.", "answer": "Administrators" },
                        { "clue": "In Linux, the 'root' user is the ultimate example of this.", "answer": "Administrators" },
                        { "clue": "In Windows, user and group information can be viewed in this tool.", "answer": "Computer Management" },
                        { "clue": "A collection of administrative tools for managing a local or remote computer.", "answer": "Computer Management" },
                        { "clue": "This is where you can find the Local Users and Groups snap-in.", "answer": "Computer Management" },
                        { "clue": "A feature in Windows that prevents unauthorized changes to a system.", "answer": "UAC" },
                        { "clue": "User Account Control is a security feature that helps prevent malware from damaging a computer.", "answer": "UAC" },
                        { "clue": "This is the feature that prompts you for permission when you try to run a program as an administrator.", "answer": "UAC" },
                        { "clue": "The first user that gets automatically created when a Linux OS is installed.", "answer": "Root User" },
                        { "clue": "The 'superuser' in a Linux system.", "answer": "Root User" },
                        { "clue": "This user has unlimited privileges and can do anything on the system.", "answer": "Root User" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "A protected file that can only be read by root.", "answer": "Sudoers file" },
                        { "clue": "This file controls which users can run commands with 'sudo' and what commands they can run.", "answer": "Sudoers file" },
                        { "clue": "It is located at /etc/sudoers.", "answer": "Sudoers file" },
                        { "clue": "In Linux, when a password isn't specified for a group, it defaults to this password.", "answer": "Root password" },
                        { "clue": "The password for the superuser account.", "answer": "Root password" },
                        { "clue": "This is a critical password to protect on a Linux system.", "answer": "Root password" },
                        { "clue": "In Linux, a user's scrambled password is saved in this file.", "answer": "/etc/shadow" },
                        { "clue": "This file contains the encrypted passwords for user accounts.", "answer": "/etc/shadow" },
                        { "clue": "This file is only readable by the root user.", "answer": "/etc/shadow" },
                        { "clue": "In Windows, file and directory permissions are assigned using these, also known as ACLs.", "answer": "Access Control Lists" },
                        { "clue": "A list of permissions attached to an object.", "answer": "Access Control Lists" },
                        { "clue": "This specifies which users or system processes are granted access to objects, as well as what operations are allowed on given objects.", "answer": "Access Control Lists" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "The Windows permission that lets you see that a file exists and read its contents.", "answer": "Read" },
                        { "clue": "This is the most basic level of file permission.", "answer": "Read" },
                        { "clue": "If you have this permission, you can open and view a file.", "answer": "Read" },
                        { "clue": "The Windows permission that lets you make changes to a file.", "answer": "Write" },
                        { "clue": "If you have this permission, you can edit and save a file.", "answer": "Write" },
                        { "clue": "This permission allows you to modify the contents of a file.", "answer": "Write" },
                        { "clue": "An umbrella Windows permission that includes read, execute, and write.", "answer": "Modify" },
                        { "clue": "This permission allows you to read, write, and delete a file.", "answer": "Modify" },
                        { "clue": "A convenient way to grant a user most of the necessary permissions for a file.", "answer": "Modify" },
                        { "clue": "A user with this permission can do anything they want to a file, including taking ownership and changing its ACL.", "answer": "Full Control" },
                        { "clue": "The highest level of file permission in Windows.", "answer": "Full Control" },
                        { "clue": "This permission should be granted with caution.", "answer": "Full Control" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "The three basic permissions in Linux are Read, Write, and this.", "answer": "Execute" },
                        { "clue": "This permission is required to run a program or script.", "answer": "Execute" },
                        { "clue": "For a directory, this permission is required to enter it.", "answer": "Execute" },
                        { "clue": "In Linux file permissions, the first bit represents this.", "answer": "File type" },
                        { "clue": "This bit indicates whether the entry is a file, directory, or symbolic link.", "answer": "File type" },
                        { "clue": "A '-' indicates a regular file, while a 'd' indicates a directory.", "answer": "File type" },
                        { "clue": "In `chmod`, the permission set for the owner is denoted by this letter.", "answer": "u" },
                        { "clue": "Short for 'user'.", "answer": "u" },
                        { "clue": "The first set of three permission bits applies to this.", "answer": "u" },
                        { "clue": "In `chmod`, the permission set for the group is denoted by this letter.", "answer": "g" },
                        { "clue": "Short for 'group'.", "answer": "g" },
                        { "clue": "The second set of three permission bits applies to this.", "answer": "g" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "In numerical permissions for `chmod`, this number represents 'read'.", "answer": "4" },
                        { "clue": "The octal value for the read permission.", "answer": "4" },
                        { "clue": "This is the first number in the octal permission set.", "answer": "4" },
                        { "clue": "In numerical permissions for `chmod`, this number represents 'write'.", "answer": "2" },
                        { "clue": "The octal value for the write permission.", "answer": "2" },
                        { "clue": "This is the second number in the octal permission set.", "answer": "2" },
                        { "clue": "In numerical permissions for `chmod`, this number represents 'execute'.", "answer": "1" },
                        { "clue": "The octal value for the execute permission.", "answer": "1" },
                        { "clue": "This is the third number in the octal permission set.", "answer": "1" },
                        { "clue": "This special permission in Linux sticks a file or folder down, so users can write to it but can't delete anything.", "answer": "Sticky Bit" },
                        { "clue": "This is often used on the /tmp directory to prevent users from deleting each other's files.", "answer": "Sticky Bit" },
                        { "clue": "Represented by a 't' in the file permissions.", "answer": "Sticky Bit" }
                    ]
                }
            ]
        },
        {
            "name": "Processes & Packages",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "An application that we can run, like the Chrome web browser.", "answer": "Program" },
                        { "clue": "A set of instructions that a computer can execute.", "answer": "Program" },
                        { "clue": "This is stored on a disk as an executable file.", "answer": "Program" },
                        { "clue": "A program that is running (code in action).", "answer": "Process" },
                        { "clue": "An instance of a computer program that is being executed.", "answer": "Process" },
                        { "clue": "This is what a program becomes when it is loaded into memory and run.", "answer": "Process" },
                        { "clue": "This is used to uniquely identify one process from another.", "answer": "PID" },
                        { "clue": "A Process ID is a number used by the operating system to identify a process.", "answer": "PID" },
                        { "clue": "This is useful for managing and terminating processes.", "answer": "PID" },
                        { "clue": "In Windows, this is a method of obtaining process information, opened with CTRL-SHIFT-ESC.", "answer": "Task Manager" },
                        { "clue": "A system monitor program used to provide information about the processes and programs running on a computer.", "answer": "Task Manager" },
                        { "clue": "This is where you can see how much CPU and memory each process is using.", "answer": "Task Manager" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "In Linux, this command is used to see a snapshot of the current processes running.", "answer": "ps" },
                        { "clue": "Short for 'process status'.", "answer": "ps" },
                        { "clue": "This command displays information about the currently running processes.", "answer": "ps" },
                        { "clue": "A way to tell a process that something's just happened.", "answer": "Signal" },
                        { "clue": "An asynchronous notification sent to a process or to a specific thread within the same process to notify it of an event.", "answer": "Signal" },
                        { "clue": "SIGINT and SIGKILL are examples of this.", "answer": "Signal" },
                        { "clue": "The common signal SIGINT stands for this.", "answer": "Signal interrupt" },
                        { "clue": "This signal is sent when you press Ctrl+C in the terminal.", "answer": "Signal interrupt" },
                        { "clue": "It is used to request that a process terminate.", "answer": "Signal interrupt" },
                        { "clue": "In Linux, you can terminate a process using this command, along with the PID.", "answer": "kill" },
                        { "clue": "This command sends a signal to a process.", "answer": "kill" },
                        { "clue": "By default, it sends the TERM signal, but can be used to send any signal.", "answer": "kill" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "This signal kills processes right away and is considered a last resort.", "answer": "SIGKILL" },
                        { "clue": "This signal cannot be caught or ignored.", "answer": "SIGKILL" },
                        { "clue": "It is used to forcefully terminate a process that is not responding.", "answer": "SIGKILL" },
                        { "clue": "In Linux, this command is used to see what your system utilization looks like in real time.", "answer": "top" },
                        { "clue": "A command-line utility that provides a real-time view of a running system.", "answer": "top" },
                        { "clue": "It displays system summary information and a list of processes currently being managed by the kernel.", "answer": "top" },
                        { "clue": "In Windows, software is usually packaged as this type of file.", "answer": ".exe" },
                        { "clue": "An executable file.", "answer": ".exe" },
                        { "clue": "This is the standard file format for programs in Windows.", "answer": ".exe" },
                        { "clue": "This Microsoft package is used to guide Windows Installer in the installation, maintenance, and removal of programs.", "answer": ".msi" },
                        { "clue": "A Windows Installer package.", "answer": ".msi" },
                        { "clue": "This is a database of installation information used by the Windows Installer.", "answer": ".msi" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "An application repository where you can download and install universal Windows platform apps.", "answer": "Windows Store" },
                        { "clue": "The official app store for Windows.", "answer": "Windows Store" },
                        { "clue": "Similar to the App Store on iOS or the Play Store on Android.", "answer": "Windows Store" },
                        { "clue": "In Linux, Ubuntu uses these packages, packaged as a .deb file.", "answer": "Debian packages" },
                        { "clue": "The standard package format for Debian-based distributions.", "answer": "Debian packages" },
                        { "clue": "These are installed using tools like 'dpkg' and 'apt'.", "answer": "Debian packages" },
                        { "clue": "Comprised of one or more files that are compressed into a single file.", "answer": "Archive" },
                        { "clue": "A single file containing multiple files and/or directories.", "answer": "Archive" },
                        { "clue": "Examples include .zip, .tar, and .rar.", "answer": "Archive" },
                        { "clue": "Counting on other pieces of software to make an application work.", "answer": "Dependencies" },
                        { "clue": "A situation where one software package relies on another to function correctly.", "answer": "Dependencies" },
                        { "clue": "Package managers like 'apt' are used to handle these automatically.", "answer": "Dependencies" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "In Windows, these shared libraries are called dynamic-link libraries, or this for short.", "answer": "DLL" },
                        { "clue": "A file containing code and data that can be used by multiple programs at the same time.", "answer": "DLL" },
                        { "clue": "This helps to promote code reuse and efficient memory usage.", "answer": "DLL" },
                        { "clue": "A server that acts like a central storage location for packages.", "answer": "Repository" },
                        { "clue": "A place where software packages are stored and can be retrieved from.", "answer": "Repository" },
                        { "clue": "Package managers like 'apt' use these to find and install software.", "answer": "Repository" },
                        { "clue": "The first non-kernel user mode that starts when Windows boots up.", "answer": "Session Manager Subsystem" },
                        { "clue": "Also known as smss.exe.", "answer": "Session Manager Subsystem" },
                        { "clue": "This process is responsible for creating user sessions.", "answer": "Session Manager Subsystem" },
                        { "clue": "This Microsoft utility lets IT support specialists and system admins look at running processes in more detail than Task Manager.", "answer": "Process Explorer" },
                        { "clue": "A powerful tool for inspecting and managing processes on Windows.", "answer": "Process Explorer" },
                        { "clue": "Part of the Sysinternals suite of tools.", "answer": "Process Explorer" }
                    ]
                }
            ]
        },
        {
            "name": "The CIA Triad & Malware",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The 'C' in the CIA Triad, it means keeping data hidden from unwanted eyes.", "answer": "Confidentiality" },
                        { "clue": "A set of rules that limits access to information.", "answer": "Confidentiality" },
                        { "clue": "This is about preventing the unauthorized disclosure of information.", "answer": "Confidentiality" },
                        { "clue": "The 'I' in the CIA Triad, it means keeping data accurate and untampered with.", "answer": "Integrity" },
                        { "clue": "Assurance that the information is trustworthy and accurate.", "answer": "Integrity" },
                        { "clue": "This is about preventing unauthorized modification of information.", "answer": "Integrity" },
                        { "clue": "The 'A' in the CIA Triad, it means information is readily accessible to those that should have it.", "answer": "Availability" },
                        { "clue": "A guarantee of reliable access to the information by authorized people.", "answer": "Availability" },
                        { "clue": "This is about ensuring that systems and data are accessible when needed.", "answer": "Availability" },
                        { "clue": "A type of malicious software that can be used to obtain sensitive information or delete/modify files.", "answer": "Malware" },
                        { "clue": "Short for 'malicious software'.", "answer": "Malware" },
                        { "clue": "A general term for any software designed to cause damage to a computer or network.", "answer": "Malware" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "This malware attaches itself to an executable code and spreads when the program is run.", "answer": "Virus" },
                        { "clue": "A type of malware that requires a host program to spread.", "answer": "Virus" },
                        { "clue": "This is one of the oldest and most well-known types of malware.", "answer": "Virus" },
                        { "clue": "This malware can live on its own and spread through channels like the network without attaching to a program.", "answer": "Worm" },
                        { "clue": "A self-replicating malware that spreads across a network.", "answer": "Worm" },
                        { "clue": "Unlike a virus, this does not need to attach itself to an existing program.", "answer": "Worm" },
                        { "clue": "Malware that disguises itself as one thing but does something else.", "answer": "Trojan" },
                        { "clue": "Named after the famous Greek story.", "answer": "Trojan" },
                        { "clue": "This type of malware often creates a backdoor for an attacker.", "answer": "Trojan" },
                        { "clue": "A type of malware that's meant to spy on you.", "answer": "Spyware" },
                        { "clue": "Software that secretly observes the user's activities on the computer and sends them to others.", "answer": "Spyware" },
                        { "clue": "This can be used to steal personal information and browsing habits.", "answer": "Spyware" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "A common type of spyware used to record every keystroke you make.", "answer": "Keylogger" },
                        { "clue": "A tool that records the keys struck on a keyboard.", "answer": "Keylogger" },
                        { "clue": "This can be used to steal passwords and other sensitive information.", "answer": "Keylogger" },
                        { "clue": "A type of attack that holds your data or system hostage until you pay some sort of ransom.", "answer": "Ransomware" },
                        { "clue": "A type of malware that encrypts a victim's files and demands a payment to decrypt them.", "answer": "Ransomware" },
                        { "clue": "This is a growing threat for both individuals and businesses.", "answer": "Ransomware" },
                        { "clue": "A malware-compromised machine.", "answer": "Bot" },
                        { "clue": "A computer that has been infected with malware and is now under the control of an attacker.", "answer": "Bot" },
                        { "clue": "These are often used as part of a botnet.", "answer": "Bot" },
                        { "clue": "A network of infected machines used to perform distributed functions.", "answer": "Botnet" },
                        { "clue": "A large number of bots that are controlled by a single attacker.", "answer": "Botnet" },
                        { "clue": "These are often used for DDoS attacks and sending spam.", "answer": "Botnet" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "A way to get into a system if other methods aren't allowed, often installed after an attacker has gained access.", "answer": "Backdoor" },
                        { "clue": "A hidden method of bypassing normal authentication or encryption in a computer system.", "answer": "Backdoor" },
                        { "clue": "This allows an attacker to regain access to a system even if their initial vulnerability is patched.", "answer": "Backdoor" },
                        { "clue": "A collection of software or tools that allows admin-level modification to an operating system.", "answer": "Rootkit" },
                        { "clue": "A set of software tools that enable an unauthorized user to gain control of a computer system without being detected.", "answer": "Rootkit" },
                        { "clue": "This is a very dangerous type of malware that is difficult to remove.", "answer": "Rootkit" },
                        { "clue": "A type of malware intentionally installed and triggered by a hacker once a certain event or time has occurred.", "answer": "Logic Bomb" },
                        { "clue": "A piece of code intentionally inserted into a software system that will set off a malicious function when specified conditions are met.", "answer": "Logic Bomb" },
                        { "clue": "This can be used by a disgruntled employee to cause damage after they have left a company.", "answer": "Logic Bomb" },
                        { "clue": "Someone who attempts to break into or exploit a system.", "answer": "Hacker" },
                        { "clue": "A person who uses computers to gain unauthorized access to data.", "answer": "Hacker" },
                        { "clue": "The term can also refer to a skilled computer expert, but is often used in a negative context.", "answer": "Hacker" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "An actual attempt at causing harm to a system.", "answer": "Attack" },
                        { "clue": "Any attempt to expose, alter, disable, destroy, steal or gain unauthorized access to or make unauthorized use of an asset.", "answer": "Attack" },
                        { "clue": "A security event is a potential one of these.", "answer": "Attack" },
                        { "clue": "A flaw in the system that could be exploited to compromise the system.", "answer": "Vulnerability" },
                        { "clue": "A weakness which can be exploited by a threat actor.", "answer": "Vulnerability" },
                        { "clue": "Security patches are released to fix these.", "answer": "Vulnerability" },
                        { "clue": "Software that is used to take advantage of a security bug or vulnerability.", "answer": "Exploit" },
                        { "clue": "A piece of software, a chunk of data, or a sequence of commands that takes advantage of a bug or vulnerability.", "answer": "Exploit" },
                        { "clue": "This is what an attacker uses to compromise a system.", "answer": "Exploit" },
                        { "clue": "A vulnerability that is not known to the software developer or vendor, but is known to the attacker.", "answer": "0-Day Vulnerability" },
                        { "clue": "An unknown exploit in the wild that exposes a vulnerability in software or hardware.", "answer": "0-Day Vulnerability" },
                        { "clue": "This is a very dangerous type of vulnerability, as there is no patch available for it.", "answer": "0-Day Vulnerability" }
                    ]
                }
            ]
        },
        {
            "name": "Network & Web Attacks",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "An attack method that relies heavily on interactions with humans instead of computers.", "answer": "Social Engineering" },
                        { "clue": "The art of manipulating people so they give up confidential information.", "answer": "Social Engineering" },
                        { "clue": "Phishing is a common form of this.", "answer": "Social Engineering" },
                        { "clue": "When a hacker sends a victim an email disguised as being legit but isn't.", "answer": "Phishing" },
                        { "clue": "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in an electronic communication.", "answer": "Phishing" },
                        { "clue": "This is a common way to steal passwords and credit card numbers.", "answer": "Phishing" },
                        { "clue": "This attack tries to prevent access to a service for legitimate users by overwhelming the network or server.", "answer": "Denial-of-Service (DoS) Attack" },
                        { "clue": "A cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users.", "answer": "Denial-of-Service (DoS) Attack" },
                        { "clue": "This is often done by flooding the target with superfluous requests.", "answer": "Denial-of-Service (DoS) Attack" },
                        { "clue": "A DoS attack using multiple systems.", "answer": "Distributed Denial-of-Service (DDoS) Attack" },
                        { "clue": "A DoS attack that is launched from multiple compromised systems.", "answer": "Distributed Denial-of-Service (DDoS) Attack" },
                        { "clue": "This is much more difficult to defend against than a regular DoS attack.", "answer": "Distributed Denial-of-Service (DDoS) Attack" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "An attack that places the attacker in the middle of two hosts that think they're communicating directly with each other.", "answer": "Man-In-the-Middle Attack" },
                        { "clue": "A cyberattack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.", "answer": "Man-In-the-Middle Attack" },
                        { "clue": "This can be used to steal login credentials or personal information.", "answer": "Man-In-the-Middle Attack" },
                        { "clue": "This works by tricking a DNS server into accepting a fake DNS record.", "answer": "DNS Cache Poisoning Attack" },
                        { "clue": "An attack that corrupts the DNS cache of a server, causing it to return incorrect IP addresses.", "answer": "DNS Cache Poisoning Attack" },
                        { "clue": "This can be used to redirect users to malicious websites.", "answer": "DNS Cache Poisoning Attack" },
                        { "clue": "An access point that is installed on the network without the network admin's knowledge.", "answer": "Rogue AP" },
                        { "clue": "An unauthorized wireless access point on a network.", "answer": "Rogue AP" },
                        { "clue": "This can be a major security risk, as it can be used to bypass network security measures.", "answer": "Rogue AP" },
                        { "clue": "When an attacker injects malicious code.", "answer": "Injection Attacks" },
                        { "clue": "A type of attack where malicious code is inserted into a program or system.", "answer": "Injection Attacks" },
                        { "clue": "SQL injection and Cross-site scripting are common examples of this.", "answer": "Injection Attacks" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "An injection attack where the attacker can insert malicious code and target the user of the service.", "answer": "Cross-site Scripting (XSS) Attacks" },
                        { "clue": "A type of security vulnerability typically found in web applications.", "answer": "Cross-site Scripting (XSS) Attacks" },
                        { "clue": "This allows an attacker to inject client-side scripts into web pages viewed by other users.", "answer": "Cross-site Scripting (XSS) Attacks" },
                        { "clue": "An injection attack that targets the entire website if the website is using a specific type of database.", "answer": "SQL Injection Attack" },
                        { "clue": "A code injection technique used to attack data-driven applications.", "answer": "SQL Injection Attack" },
                        { "clue": "This can be used to steal data from a database or even take control of the server.", "answer": "SQL Injection Attack" },
                        { "clue": "A network that the victim thinks is legitimate, but is really an identical network controlled by a hacker to monitor traffic.", "answer": "Evil Twin" },
                        { "clue": "A fraudulent Wi-Fi access point that appears to be a legitimate one.", "answer": "Evil Twin" },
                        { "clue": "This can be used to steal sensitive information from users who connect to it.", "answer": "Evil Twin" },
                        { "clue": "These attacks utilize software like password-crackers that try and guess your password.", "answer": "Password Attacks" },
                        { "clue": "An attack that attempts to guess a user's password.", "answer": "Password Attacks" },
                        { "clue": "Brute force and dictionary attacks are common types of this.", "answer": "Password Attacks" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "A common password attack that just continuously tries different combinations of characters and letters.", "answer": "Brute force attack" },
                        { "clue": "A trial-and-error method used to obtain information such as a user password.", "answer": "Brute force attack" },
                        { "clue": "This can be very time-consuming, but is often successful if the password is weak.", "answer": "Brute force attack" },
                        { "clue": "A source masquerading around as something else.", "answer": "Spoofing" },
                        { "clue": "A situation in which a person or program successfully identifies as another by falsifying data.", "answer": "Spoofing" },
                        { "clue": "IP spoofing and email spoofing are common examples of this.", "answer": "Spoofing" },
                        { "clue": "Gaining access into a restricted area or building by following a real employe.", "answer": "Tailgating" },
                        { "clue": "A social engineering technique used to gain access to a secure location.", "answer": "Tailgating" },
                        { "clue": "Also known as piggybacking.", "answer": "Tailgating" },
                        { "clue": "The term for an ARP Response that was not prompted by an ARP Request.", "answer": "Gratuitous ARP" },
                        { "clue": "A broadcast ARP request for a computer's own IP address.", "answer": "Gratuitous ARP" },
                        { "clue": "This can be used to detect duplicate IP addresses on a network.", "answer": "Gratuitous ARP" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "The premise of this is for the victim to connect to a network that is identical to a legit one, but is actually controlled by a hacker.", "answer": "Evil Twin" },
                        { "clue": "This is a form of man-in-the-middle attack.", "answer": "Evil Twin" },
                        { "clue": "Users are often tricked into connecting to this because it has a familiar name.", "answer": "Evil Twin" },
                        { "clue": "XSS attacks are a common method to achieve this.", "answer": "Session hijacking" },
                        { "clue": "The exploitation of a valid computer session to gain unauthorized access to information or services in a computer system.", "answer": "Session hijacking" },
                        { "clue": "This can be used to impersonate a user and take over their account.", "answer": "Session hijacking" },
                        { "clue": "A security feature in MS switches that protects networks against man-in-the-middle ARP spoofing attacks.", "answer": "Dynamic ARP Inspection" },
                        { "clue": "DAI is a security feature that validates ARP packets in a network.", "answer": "Dynamic ARP Inspection" },
                        { "clue": "This helps to prevent ARP poisoning attacks.", "answer": "Dynamic ARP Inspection" },
                        { "clue": "An attacker is able to inject valid SQL commands into this part of a website.", "answer": "Text input field" },
                        { "clue": "A common vulnerability in web applications that do not properly sanitize user input.", "answer": "Text input field" },
                        { "clue": "This is where a user can enter text, such as a username or password.", "answer": "Text input field" }
                    ]
                }
            ]
        },
        {
            "name": "Encryption & Hashing",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The act of taking a message, called plaintext, and applying an operation to it to get a garbled, unreadable message.", "answer": "Encryption" },
                        { "clue": "The process of converting information or data into a code, especially to prevent unauthorized access.", "answer": "Encryption" },
                        { "clue": "The opposite of decryption.", "answer": "Encryption" },
                        { "clue": "The reverse process of encryption.", "answer": "Decryption" },
                        { "clue": "The process of converting encrypted data back into its original form.", "answer": "Decryption" },
                        { "clue": "You need the correct key to perform this.", "answer": "Decryption" },
                        { "clue": "This type of algorithm uses the same key to encrypt and decrypt messages.", "answer": "Symmetric-Key Algorithm" },
                        { "clue": "An encryption system in which the sender and receiver of a message share a single, common key.", "answer": "Symmetric-Key Algorithm" },
                        { "clue": "AES and DES are examples of this.", "answer": "Symmetric-Key Algorithm" },
                        { "clue": "This type of cipher uses a pair of related keys -- one public and one private.", "answer": "Asymmetric Cipher" },
                        { "clue": "An encryption system that uses a pair of keys: a public key for encryption and a private key for decryption.", "answer": "Asymmetric Cipher" },
                        { "clue": "Also known as public-key cryptography.", "answer": "Asymmetric Cipher" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "A type of function or operation that takes an arbitrary data input and maps it to an output of fixed size.", "answer": "Hashing" },
                        { "clue": "A one-way function that is used to create a digital fingerprint of data.", "answer": "Hashing" },
                        { "clue": "This is used for password storage and data integrity checks.", "answer": "Hashing" },
                        { "clue": "One of the earliest encryption standards, developed in the 1970s by IBM.", "answer": "DES" },
                        { "clue": "The Data Encryption Standard is a symmetric-key algorithm for the encryption of digital data.", "answer": "DES" },
                        { "clue": "It is now considered insecure due to its small key size.", "answer": "DES" },
                        { "clue": "This replaced DES and is approved for use with top-secret information by the NSA.", "answer": "AES" },
                        { "clue": "The Advanced Encryption Standard is a symmetric-key algorithm used by the U.S. government to protect classified information.", "answer": "AES" },
                        { "clue": "It is now the most widely used symmetric encryption algorithm.", "answer": "AES" },
                        { "clue": "This popular hash function from the early 1990s generates 128-bit hash digests but is susceptible to hash collision.", "answer": "MD5" },
                        { "clue": "Message Digest 5 is a widely used hash function producing a 128-bit hash value.", "answer": "MD5" },
                        { "clue": "It is no longer considered secure for cryptographic purposes.", "answer": "MD5" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "Part of the secure hash algorithm suite, it generates a 160-bit hash digest.", "answer": "SHA-1" },
                        { "clue": "Secure Hash Algorithm 1 is a cryptographic hash function which takes an input and produces a 160-bit hash value.", "answer": "SHA-1" },
                        { "clue": "It is also no longer considered secure for most cryptographic purposes.", "answer": "SHA-1" },
                        { "clue": "When two different inputs map to the same hash output.", "answer": "Hash Collisions" },
                        { "clue": "A situation where two different inputs produce the same hash value.", "answer": "Hash Collisions" },
                        { "clue": "This is a weakness in a hash function that can be exploited by an attacker.", "answer": "Hash Collisions" },
                        { "clue": "The practice of hiding information from observers, but not encoding it.", "answer": "Steganography" },
                        { "clue": "The art and science of writing hidden messages in such a way that no one, apart from the sender and intended recipient, suspects the existence of the message.", "answer": "Steganography" },
                        { "clue": "This can be used to hide a message within an image or audio file.", "answer": "Steganography" },
                        { "clue": "This governs the issuance of digital certificates to protect sensitive data.", "answer": "PKI" },
                        { "clue": "Public Key Infrastructure is a set of roles, policies, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates.", "answer": "PKI" },
                        { "clue": "This is the foundation for secure communication on the internet.", "answer": "PKI" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "Digital certificates are also called this type of certificate.", "answer": "X.509 certificates" },
                        { "clue": "A standard defining the format of public key certificates.", "answer": "X.509 certificates" },
                        { "clue": "These are used in many Internet protocols, including TLS/SSL.", "answer": "X.509 certificates" },
                        { "clue": "These are responsible for creating digital certificates.", "answer": "Certification Authorities" },
                        { "clue": "A trusted entity that issues digital certificates.", "answer": "Certification Authorities" },
                        { "clue": "Examples include Let's Encrypt and DigiCert.", "answer": "Certification Authorities" },
                        { "clue": "A precomputed table of all possible password values and their corresponding hashes.", "answer": "Rainbow Table" },
                        { "clue": "A hacking tool used for cracking password hashes.", "answer": "Rainbow Table" },
                        { "clue": "This can be defeated by using a salt.", "answer": "Rainbow Table" },
                        { "clue": "The addition of a unique, random string of characters to each password before it is hashed.", "answer": "Password Salt" },
                        { "clue": "A random data that is used as an additional input to a one-way function that hashes data.", "answer": "Password Salt" },
                        { "clue": "This helps to protect against rainbow table attacks.", "answer": "Password Salt" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "A certificate that a web server presents to a client as part of the initial secure setup of an SSL, TLS connection.", "answer": "TLS/SSL Certificate" },
                        { "clue": "A digital certificate that authenticates the identity of a website and encrypts information sent to the server.", "answer": "TLS/SSL Certificate" },
                        { "clue": "This is what enables HTTPS.", "answer": "TLS/SSL Certificate" },
                        { "clue": "The shared symmetric encryption key used in TLS sessions to encrypt data being sent back and forth.", "answer": "Session Key" },
                        { "clue": "A single-use symmetric key used for encrypting and decrypting data in a single communication session.", "answer": "Session Key" },
                        { "clue": "This is generated during the TLS handshake.", "answer": "Session Key" },
                        { "clue": "A VPN protocol that works by encrypting an IP packet and encapsulating it inside a special packet.", "answer": "IPsec" },
                        { "clue": "Internet Protocol Security is a secure network protocol suite that authenticates and encrypts the packets of data sent over an Internet Protocol network.", "answer": "IPsec" },
                        { "clue": "This is often used to create a secure connection between two networks.", "answer": "IPsec" },
                        { "clue": "A hardware device that's a dedicated crypto processor, offering secure generation of keys and random numbers.", "answer": "TPM" },
                        { "clue": "A Trusted Platform Module is a secure cryptoprocessor that is designed to carry out cryptographic operations.", "answer": "TPM" },
                        { "clue": "This can be used to securely store encryption keys and other sensitive data.", "answer": "TPM" }
                    ]
                }
            ]
        },
        {
            "name": "Authentication & Access Control",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The three A's of security are Authentication, Authorization, and this.", "answer": "Accounting" },
                        { "clue": "The process of tracking user activity and resource consumption.", "answer": "Accounting" },
                        { "clue": "This is the 'A' in AAA security that deals with logging and monitoring.", "answer": "Accounting" },
                        { "clue": "A system where users are authenticated by presenting multiple pieces of information or objects.", "answer": "Multifactor Authentication" },
                        { "clue": "An authentication method in which a computer user is granted access only after successfully presenting two or more pieces of evidence to an authentication mechanism.", "answer": "Multifactor Authentication" },
                        { "clue": "MFA is the acronym for this.", "answer": "Multifactor Authentication" },
                        { "clue": "For multifactor authentication, 'Something you know' could be this.", "answer": "Password/PIN" },
                        { "clue": "A secret piece of information used to verify a user's identity.", "answer": "Password/PIN" },
                        { "clue": "This is the most common form of authentication.", "answer": "Password/PIN" },
                        { "clue": "For multifactor authentication, 'Something you have' could be this.", "answer": "ATM/Bank Card" },
                        { "clue": "A physical object that is used to authenticate a user.", "answer": "ATM/Bank Card" },
                        { "clue": "A security token or a smartphone can also be used for this.", "answer": "ATM/Bank Card" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "For multifactor authentication, 'Something you are' could be this.", "answer": "Biometric ID" },
                        { "clue": "A physical characteristic that is used to authenticate a user.", "answer": "Biometric ID" },
                        { "clue": "Fingerprints and iris scans are examples of this.", "answer": "Biometric ID" },
                        { "clue": "This short-lived and constantly changing value is a type of password.", "answer": "OTP" },
                        { "clue": "A One-Time Password is a password that is valid for only one login session or transaction.", "answer": "OTP" },
                        { "clue": "This is often used as a second factor of authentication.", "answer": "OTP" },
                        { "clue": "This protocol provides AAA services for users on a network.", "answer": "RADIUS" },
                        { "clue": "Remote Authentication Dial-In User Service is a networking protocol that provides centralized Authentication, Authorization, and Accounting management.", "answer": "RADIUS" },
                        { "clue": "This is often used for authenticating users on a Wi-Fi network.", "answer": "RADIUS" },
                        { "clue": "A network authentication protocol that uses 'tickets' to allow entities to prove their identity.", "answer": "Kerberos" },
                        { "clue": "A computer network authentication protocol that works on the basis of tickets to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner.", "answer": "Kerberos" },
                        { "clue": "This is the default authentication protocol in Windows Active Directory.", "answer": "Kerberos" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "A signed list published by the CA which defines certificates that have been explicitly revoked.", "answer": "CRL" },
                        { "clue": "A Certificate Revocation List is a list of digital certificates that have been revoked by the issuing Certificate Authority.", "answer": "CRL" },
                        { "clue": "This is used to check if a certificate is still valid.", "answer": "CRL" },
                        { "clue": "An authentication concept that allows users to authenticate once to be granted access to a lot of different services.", "answer": "SSO" },
                        { "clue": "Single Sign-On is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.", "answer": "SSO" },
                        { "clue": "This provides a seamless experience for users and simplifies password management.", "answer": "SSO" },
                        { "clue": "This pertains to describing what the user account has access to or doesn't have access to.", "answer": "Authorization" },
                        { "clue": "The process of determining if a user has permission to access a resource.", "answer": "Authorization" },
                        { "clue": "This is the 'A' in AAA security that deals with permissions.", "answer": "Authorization" },
                        { "clue": "A way of defining permissions, where individual permissions are called Access Control Entries.", "answer": "ACL" },
                        { "clue": "An Access Control List is a list of permissions attached to an object.", "answer": "ACL" },
                        { "clue": "This is used to control who can access a file, folder, or network resource.", "answer": "ACL" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "The process of securing a network by reducing its potential vulnerabilities through configuration changes.", "answer": "Network Hardening" },
                        { "clue": "A set of best practices for securing a network.", "answer": "Network Hardening" },
                        { "clue": "This includes things like disabling unused ports and services, and using strong passwords.", "answer": "Network Hardening" },
                        { "clue": "A network security concept where anything not explicitly permitted or allowed should be denied.", "answer": "Implicit Deny" },
                        { "clue": "A security principle that states that if a user or system is not explicitly granted access to a resource, they should be denied access.", "answer": "Implicit Deny" },
                        { "clue": "This is a key principle of firewall configuration.", "answer": "Implicit Deny" },
                        { "clue": "The practice of collecting logs from different network devices and performing an automated analysis on them.", "answer": "Analyzing Logs" },
                        { "clue": "A key part of security monitoring and incident response.", "answer": "Analyzing Logs" },
                        { "clue": "This can help to identify security threats and vulnerabilities.", "answer": "Analyzing Logs" },
                        { "clue": "A feature on enterprise switches that monitors DHCP traffic to protect against attacks.", "answer": "DHCP snooping" },
                        { "clue": "A security feature that acts like a firewall between untrusted hosts and trusted DHCP servers.", "answer": "DHCP snooping" },
                        { "clue": "This helps to prevent rogue DHCP servers from being used on a network.", "answer": "DHCP snooping" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "An authentication protocol to allow access to networks with the use of a RADIUS server, considered the gold standard.", "answer": "802.1X" },
                        { "clue": "An IEEE standard for port-based Network Access Control.", "answer": "802.1X" },
                        { "clue": "This is often used to secure Wi-Fi networks in enterprise environments.", "answer": "802.1X" },
                        { "clue": "A software firewall that is installed directly on a computer, rather than a network.", "answer": "Host-Based Firewall" },
                        { "clue": "A firewall that is installed on a single computer to protect it from network-based threats.", "answer": "Host-Based Firewall" },
                        { "clue": "Windows Firewall is an example of this.", "answer": "Host-Based Firewall" },
                        { "clue": "In Kerberos authentication, this server performs initial authentication when a user wants to access a service.", "answer": "Authentication server" },
                        { "clue": "The first step in the Kerberos authentication process is to contact this server.", "answer": "Authentication server" },
                        { "clue": "This server issues a Ticket Granting Ticket to the user.", "answer": "Authentication server" },
                        { "clue": "In Kerberos, after verifying a user, the AS sends back one of these.", "answer": "Ticket Granting Ticket" },
                        { "clue": "A TGT is used to request a service ticket from the Ticket Granting Server.", "answer": "Ticket Granting Ticket" },
                        { "clue": "This is a key component of the Kerberos authentication process.", "answer": "Ticket Granting Ticket" }
                    ]
                }
            ]
        },
        {
            "name": "OSI & TCP/IP Model",
            "questions": [
                {
                    "value": 200,
                    "alternates": [
                        { "clue": "The model that came before the TCP/IP 5 layer model.", "answer": "OSI model" },
                        { "clue": "A conceptual framework that standardizes the functions of a telecommunication or computing system.", "answer": "OSI model" },
                        { "clue": "This model has seven layers.", "answer": "OSI model" },
                        { "clue": "The layer of the TCP/IP model where applications can access network services.", "answer": "Application Layer" },
                        { "clue": "The top layer of the TCP/IP model.", "answer": "Application Layer" },
                        { "clue": "This layer includes protocols like HTTP, FTP, and SMTP.", "answer": "Application Layer" },
                        { "clue": "This layer is responsible for controlling ports and sessions.", "answer": "Transport Layer" },
                        { "clue": "The fourth layer of the TCP/IP model.", "answer": "Transport Layer" },
                        { "clue": "This layer includes protocols like TCP and UDP.", "answer": "Transport Layer" },
                        { "clue": "This layer decides which physical path the data will take.", "answer": "Network Layer" },
                        { "clue": "The third layer of the TCP/IP model.", "answer": "Network Layer" },
                        { "clue": "This layer is responsible for routing packets across the network.", "answer": "Network Layer" }
                    ]
                },
                {
                    "value": 400,
                    "alternates": [
                        { "clue": "This layer defines the format of data on a network.", "answer": "Data Link Layer" },
                        { "clue": "The second layer of the TCP/IP model.", "answer": "Data Link Layer" },
                        { "clue": "This layer is responsible for error detection and correction.", "answer": "Data Link Layer" },
                        { "clue": "This layer transmits the raw bit stream over the physical network.", "answer": "Physical Layer" },
                        { "clue": "The first layer of the TCP/IP model.", "answer": "Physical Layer" },
                        { "clue": "This layer deals with the physical hardware of the network, such as cables and connectors.", "answer": "Physical Layer" },
                        { "clue": "At the Network layer, data is in the form of a Datagram, which uses this type of address.", "answer": "IP address" },
                        { "clue": "A unique address that identifies a device on the internet or a local network.", "answer": "IP address" },
                        { "clue": "This is used to route packets to their destination.", "answer": "IP address" },
                        { "clue": "At the Data Link layer, data is in the form of a Frame, which uses this type of address.", "answer": "MAC address" },
                        { "clue": "A unique identifier assigned to a network interface controller for use as a network address in communications within a network segment.", "answer": "MAC address" },
                        { "clue": "This is a physical address that is hardcoded into the network card.", "answer": "MAC address" }
                    ]
                },
                {
                    "value": 600,
                    "alternates": [
                        { "clue": "At the Transport layer, data is in the form of a Segment, which uses these for addressing.", "answer": "Port numbers" },
                        { "clue": "A number that identifies a specific process or service on a computer.", "answer": "Port numbers" },
                        { "clue": "This allows multiple applications on a computer to use the network at the same time.", "answer": "Port numbers" },
                        { "clue": "Protocols like DCHP, DNS, and HTTP exist at this layer.", "answer": "Application Layer" },
                        { "clue": "The layer that is closest to the end user.", "answer": "Application Layer" },
                        { "clue": "This layer provides services for user applications.", "answer": "Application Layer" },
                        { "clue": "Protocols like TCP and UDP exist at this layer.", "answer": "Transport Layer" },
                        { "clue": "This layer is responsible for end-to-end communication between hosts.", "answer": "Transport Layer" },
                        { "clue": "It provides services such as connection-oriented communication, reliability, flow control, and multiplexing.", "answer": "Transport Layer" },
                        { "clue": "This protocol is used at the network layer.", "answer": "IP" },
                        { "clue": "The Internet Protocol is the principal communications protocol in the Internet protocol suite for relaying datagrams across network boundaries.", "answer": "IP" },
                        { "clue": "It is responsible for addressing and routing packets.", "answer": "IP" }
                    ]
                },
                {
                    "value": 800,
                    "alternates": [
                        { "clue": "Ethernet and Wifi are protocols at this layer.", "answer": "Data Link Layer" },
                        { "clue": "This layer provides node-to-node data transfer.", "answer": "Data Link Layer" },
                        { "clue": "It is divided into two sublayers: the Media Access Control (MAC) layer and the Logical Link Control (LLC) layer.", "answer": "Data Link Layer" },
                        { "clue": "The OSI model layer that ensures data is in a usable format and is where data encryption occurs.", "answer": "Presentation Layer" },
                        { "clue": "The sixth layer of the OSI model.", "answer": "Presentation Layer" },
                        { "clue": "It is responsible for data translation, encryption, and compression.", "answer": "Presentation Layer" },
                        { "clue": "The OSI model layer that maintains connections.", "answer": "Session Layer" },
                        { "clue": "The fifth layer of the OSI model.", "answer": "Session Layer" },
                        { "clue": "It is responsible for opening, closing, and managing a session between two computers.", "answer": "Session Layer" },
                        { "clue": "In the OSI model, this is the Human-computer interaction layer.", "answer": "Application Layer" },
                        { "clue": "The seventh layer of the OSI model.", "answer": "Application Layer" },
                        { "clue": "It provides services directly to the user.", "answer": "Application Layer" }
                    ]
                },
                {
                    "value": 1000,
                    "alternates": [
                        { "clue": "The OSI model has this many layers.", "answer": "Seven" },
                        { "clue": "The number of layers in the Open Systems Interconnection model.", "answer": "Seven" },
                        { "clue": "This is a key difference between the OSI model and the TCP/IP model.", "answer": "Seven" },
                        { "clue": "The TCP/IP model has this many layers.", "answer": "Five" },
                        { "clue": "The number of layers in the TCP/IP model, according to the provided text.", "answer": "Five" },
                        { "clue": "Sometimes it is described as having four layers, but the text specifies this many.", "answer": "Five" },
                        { "clue": "Also known as the internet layer.", "answer": "Network Layer" },
                        { "clue": "This layer is responsible for routing packets across the internet.", "answer": "Network Layer" },
                        { "clue": "The layer where IP operates.", "answer": "Network Layer" },
                        { "clue": "The Presentation and Session layers of the OSI model are combined into this single layer in the TCP/IP model.", "answer": "Application Layer" },
                        { "clue": "The TCP/IP model simplifies the OSI model by combining these layers.", "answer": "Application Layer" },
                        { "clue": "This is one of the key differences between the OSI and TCP/IP models.", "answer": "Application Layer" }
                    ]
                }
            ]
        }
    ]
}