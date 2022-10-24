import { TestCustomerRepository } from "@data-layer/customer/customer.test-repository";
import {
  CreateCustomerRequestDTO,
  CustomerAddressDTO,
  CustomerNameDTO,
} from "@logic/customer";
import { CustomerType } from "@data-layer/customer";

describe("Test the Test Customer Repository", function () {
  const repo = new TestCustomerRepository();
  let address: CustomerAddressDTO = {
    city: "",
    country: "",
    postalCode: "",
    state: "",
    street: "",
  };
  let customerName: CustomerNameDTO = { firstName: "", lastName: "" };
  const data: CreateCustomerRequestDTO = {
    bvn: "",
    customerAddress: address,
    customerName: customerName,
    customerType: CustomerType.INDIVIDUAL,
    dateOfBirth: new Date(),
    email: "",
    identity: [],
    phone: "",
  };

  it("Should be defined", () => {
    expect(repo).toBeDefined();
  });

  it("Should have a create method", () => {
    expect(repo.create).toBeDefined();
  });
  it("Should have a createCustomerFeedback method", () => {
    expect(repo.createCustomerFeedback).toBeDefined();
  });
  it("Should have a delete method", () => {
    expect(repo.delete).toBeDefined();
  });

  it("Should have a findAll method", () => {
    expect(repo.findAll).toBeDefined();
  });
  it("Should have a findByBVN method", () => {
    expect(repo.findByBVN).toBeDefined();
  });
  it("Should have a findById method", () => {
    expect(repo.findById).toBeDefined();
  });
  it("Should have a findCustomerAccounts method", () => {
    expect(repo.findCustomerAccounts).toBeDefined();
  });
  it("Should have a update method", () => {
    expect(repo.update).toBeDefined();
  });

  it("should raise an error when create method is called", () => {
    expect(() => {
      repo.create(data);
    }).toThrowError(Error);
  });

  it("should raise an error when createCustomerFeedback method is called", () => {
    expect(() => {
      repo.createCustomerFeedback("data");
    }).toThrowError(Error);
  });

  it("should raise an error when delete method is called", () => {
    expect(() => {
      repo.delete("data");
    }).toThrowError(Error);
  });

  it("should raise an error when findAll method is called", () => {
    expect(() => {
      repo.findAll();
    }).toThrowError(Error);
  });
  it("should raise an error when findCustomerAccounts method is called", () => {
    expect(() => {
      repo.findCustomerAccounts("some");
    }).toThrowError(Error);
  });
  it("should raise an error when findByBVN method is called", () => {
    expect(() => {
      repo.findByBVN("dfd");
    }).toThrowError(Error);
  });
  it("should raise an error when findById method is called", () => {
    expect(() => {
      repo.findById("st");
    }).toThrowError(Error);
  });
  it("should raise an error when update method is called", () => {
    expect(() => {
      repo.update("data", "moredata");
    }).toThrowError(Error);
  });
});
