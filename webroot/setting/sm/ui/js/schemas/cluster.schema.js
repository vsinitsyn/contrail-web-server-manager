/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

define([], function () {
    const clusterSchema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "default": null
            },
            "email": {
                "type": "string",
                "default": null
            },
            "base_image_id": {
                "type": "string",
                "default": null
            },
            "package_image_id": {
                "type": "string",
                "default": null
            },
            "parameters": {
                "type": "object",
                "properties": {
                    "domain": {
                        "type": "string",
                        "default": null
                    },
                    "subnet_mask": {
                        "type": "string",
                        "default": null
                    },
                    "gateway": {
                        "type": "string",
                        "default": null
                    },
                    "password": {
                        "type": "string",
                        "default": null
                    },
                    "provision": {
                        "type": "object",
                        "properties": {
                            "contrail": {
                                "type": "object",
                                "properties": {
                                    "xmpp_auth_enable": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                    "xmpp_dns_auth_enable": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                    "kernel_upgrade": {
                                        "type": "boolean",
                                        "default": true
                                    },
                                    "kernel_version": {
                                        "type": "string",
                                        "default": ""
                                    },
                                    "enable_lbass": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                    "ha": {
                                        "type": "object",
                                        "properties": {
                                            "haproxy_enable": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "contrail_internal_vip": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "contrail_external_vip": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "contrail_internal_virtual_router_id": {
                                                "type": "integer",
                                                "default": 103
                                            },
                                            "qqcontrail_internal_virtual_router_id": {
                                                "type": "integer",
                                                "default": 1034
                                            }
                                        }
                                    },
                                    "database": {
                                        "type": "object",
                                        "properties": {
                                            "ip_port": {
                                                "type": "integer",
                                                "default": 9160
                                            },
                                            "directory": {
                                                "type": "string",
                                                "default": "/var/lib/cassandra"
                                            },
                                            "minimum_diskGB": {
                                                "type": "integer",
                                                "default": 32
                                            }
                                        }
                                    },
                                    "analytics": {
                                        "type": "object",
                                        "properties": {
                                            "data_ttl": {
                                                "type": "integer",
                                                "default": 48
                                            },
                                            "config_audit_ttl": {
                                                "type": "integer",
                                                "default": 2160
                                            },
                                            "statistics_ttl": {
                                                "type": "integer",
                                                "default": 168
                                            },
                                            "flow_ttl": {
                                                "type": "integer",
                                                "default": 2
                                            },
                                            "snmp_scan_frequency": {
                                                "type": "integer",
                                                "default": 600
                                            },
                                            "snmp_fast_scan_frequency": {
                                                "type": "integer",
                                                "default": 60
                                            },
                                            "topology_scan_frequency": {
                                                "type": "integer",
                                                "default": 60
                                            },
                                            "syslog_port": {
                                                "type": "integer",
                                                "default": -1
                                            },
                                            "data_directory": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "ssd_data_directory": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "redis_password": {
                                                "type": "string",
                                                "default": null
                                            }
                                        }
                                    },
                                    "control": {
                                        "type": "object",
                                        "properties": {
                                            "encapsulation_priority": {
                                                "type": "string",
                                                "default": "VXLAN,MPLSoUDP,MPLSoGRE"
                                            },
                                            "router_asn": {
                                                "type": "integer",
                                                "default": 64512
                                            },
                                            "external_bgp": {
                                                "type": "string",
                                                "default": ""
                                            }
                                        }
                                    },
                                    "config": {
                                        "type": "object",
                                        "properties": {
                                            "manage_neutron": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "zookeeper_ip_port": {
                                                "type": "integer",
                                                "default": 2181
                                            },
                                            "healthcheck_interval": {
                                                "type": "integer",
                                                "default": 5
                                            }
                                        }
                                    },
                                    "webui": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "compute": {
                                        "type": "object",
                                        "properties": {
                                            "huge_pages": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "core_mask": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "sriov": {
                                                "type": "object",
                                                "properties": {
                                                    "enable": {
                                                        "type": "boolean",
                                                        "default": false
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "vmware": {
                                        "type": "object",
                                        "properties": {
                                            "ip": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "username": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "password": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "vswitch": {
                                                "type": "string",
                                                "default": ""
                                            }
                                        }
                                    },
                                    "vgw": {
                                        "type": "object",
                                        "properties": {
                                            "public_subnet": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "public_vn_name": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "interface": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "gateway_routes": {
                                                "type": "string",
                                                "default": ""
                                            }
                                        }
                                    },
                                    "storage": {
                                        "type": "object",
                                        "properties": {
                                            "storage_monitor_secret": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "osd_bootstrap_key": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "storage_chassis_config": {
                                                "type": "array",
                                                "items": {}
                                            },
                                            "live_migration_host": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "live_migration_ip": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "live_migration_storage_scope": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "storage_admin_key": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "storage_enabled": {
                                                "type": "string",
                                                "default": ""
                                            }
                                        }
                                    },
                                    "toragent": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "tsn": {
                                        "type": "object",
                                        "properties": {}
                                    }
                                }
                            },
                            "openstack": {
                                "type": "object",
                                "properties": {
                                    "keystone": {
                                        "type": "object",
                                        "properties": {
                                            "admin_password": {
                                                "type": "string",
                                                "default": "contrail123"
                                            },
                                            "ip": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "admin_user": {
                                                "type": "string",
                                                "default": "admin"
                                            },
                                            "admin_tenant": {
                                                "type": "string",
                                                "default": "admin"
                                            },
                                            "service_tenant": {
                                                "type": "string",
                                                "default": "services"
                                            },
                                            "auth_port": {
                                                "type": "integer",
                                                "default": 35357
                                            },
                                            "auth_protocol": {
                                                "type": "string",
                                                "default": "http"
                                            }
                                        }
                                    },
                                    "neutron": {
                                        "type": "object",
                                        "properties": {
                                            "service_protocol": {
                                                "type": "string",
                                                "default": "http"
                                            },
                                            "port": {
                                                "type": "integer",
                                                "default": 9697
                                            }
                                        }
                                    },
                                    "amqp": {
                                        "type": "object",
                                        "properties": {
                                            "server_ip": {
                                                "type": "string",
                                                "default": ""
                                            }
                                        }
                                    },
                                    "region": {
                                        "type": "string",
                                        "default": "RegionOne"
                                    },
                                    "multi_tenancy": {
                                        "type": "boolean",
                                        "default": true
                                    },
                                    "openstack_manage_amqp": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                    "enable_ceilometer": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                    "ha": {
                                        "type": "object",
                                        "properties": {
                                            "internal_vip": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "external_vip": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "internal_virtual_router_id": {
                                                "type": "integer",
                                                "default": 102
                                            },
                                            "external_virtual_router_id": {
                                                "type": "integer",
                                                "default": 101
                                            },
                                            "nfs_server": {
                                                "type": "string",
                                                "default": ""
                                            },
                                            "nfs_glance_path": {
                                                "type": "string",
                                                "default": ""
                                            }
                                        }
                                    },
                                    "mysql": {
                                        "type": "object",
                                        "properties": {
                                            "root_password": {
                                                "type": "string",
                                                "default": "c0ntrail123"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "required": ["id"]
    }
    return clusterSchema;
});