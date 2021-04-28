import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly adressesService: AddressesService) { }

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto) {
    return await this.adressesService.create(createAddressDto);
  }

  @Get()
  async findAll() {
    return await this.adressesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.adressesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return await this.adressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.adressesService.remove(+id);
  }
}
